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

    const articleTemplatePath = path.resolve(
        `./src/templates/articlesTemplate.js`
    );

    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: {fields: [frontmatter___date], order: ASC}
                    limit: 500
                ) {
                    nodes {
                        id
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        `
    );
    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }
    const posts = result.data.allMarkdownRemark.nodes;

    // Create pages if there is atleast one
    if (posts.length > 0) {
        posts.forEach(post => {
            createPage({
                path: post.frontmatter.slug,
                component: articleTemplatePath,
                context: {
                    id: post.id
                }
            });
        });
    }
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
