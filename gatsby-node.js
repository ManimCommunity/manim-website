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
