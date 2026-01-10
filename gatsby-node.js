const fs = require("fs");
const path = require(`path`);

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions;
    let files = fs.readdirSync("./content");
    files.forEach(file => {
        if (file.endsWith(".json")) {
            let contents = JSON.parse(
                fs.readFileSync("./content/" + file, "utf-8")
            );
            let page_link = "/plugin/" + contents.info.name;
            createPage({
                path: page_link,
                component: require.resolve("./src/templates/pluginTemplate.js"),
                context: {
                    pageContent: contents
                }
            });
        }
    });

    const articleTemplatePath = path.resolve(`./src/templates/articlesTemplate.js`);

    // Articles live in ./articles. The build should still succeed if there are none.
    // We can safely query frontmatter once there is at least one markdown node.
    const countResult = await graphql(`
        {
            allMarkdownRemark(limit: 1) {
                totalCount
            }
        }
    `);

    if (countResult.errors) {
        reporter.warn(
            `Skipping article page creation: MarkdownRemark query failed. (${countResult.errors[0].message})`
        );
        return;
    }

    const total = countResult.data?.allMarkdownRemark?.totalCount || 0;
    if (total === 0) {
        reporter.info(`No articles found in ./articles, skipping article page creation.`);
        return;
    }

    const result = await graphql(`
        {
            allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 500) {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.warn(
            `Skipping article page creation: could not load article slugs. (${result.errors[0].message})`
        );
        return;
    }

    const posts = result.data?.allMarkdownRemark?.nodes || [];

    posts
        .filter(p => p?.frontmatter?.slug)
        .forEach(post => {
            createPage({
                path: post.frontmatter.slug,
                component: articleTemplatePath,
                context: {
                    id: post.id
                }
            });
        });
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    // Ensure MarkdownRemark.frontmatter exists even if there are 0 markdown files.
    // This keeps builds succeeding when ./articles is empty.
    createTypes(`
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }

      type Frontmatter {
        slug: String
        title: String
        description: String
        date: Date @dateformat
      }
    `);
};

exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
    let files = require("fs");

    let examples = [];
    examples = JSON.parse(files.readFileSync("./manim_examples.json", "utf8"));
    examples.forEach(example => {
        let visible = "";
        if (example.visible === true) {
            visible = "visible";
        } else {
            visible = "hidden";
        }
        const node = {
            name: example.name,
            code: example.code,
            output: example.output,
            visible: visible,
            type: example.type,
            id: createNodeId(`ManimExample-${example.name}`),
            internal: {
                type: "ManimExample",
                contentDigest: createContentDigest(examples)
            }
        };
        actions.createNode(node);
    });
};
