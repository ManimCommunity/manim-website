module.exports = {
    siteMetadata: {
        siteUrl: `https://plugins.manim.community`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content`,
            },
        },],
}