const fs = require("fs")

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    let files = fs.readdirSync('./content')
    files.forEach(file => {
        console.log(file);
        if (file.endsWith('.json')) {
            let contents = JSON.parse(fs.readFileSync('./content/' + file, "utf-8"))
            console.log(contents.name)
            console.log(contents.license)
            page_link = '/plugins/' + contents.license
            createPage({
                path: page_link,
                component: require.resolve("./src/templates/pluginTemplate.js"),
                context: {
                    pageContent: contents,
                },
            })
        }
    });
}
