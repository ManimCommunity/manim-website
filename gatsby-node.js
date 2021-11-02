const fs = require("fs");

exports.createPages = ({actions}) => {
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
};

exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
    let files = require("fs");

    let examples = {};
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
