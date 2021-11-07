module.exports = {
    siteMetadata: {
        siteUrl: `https://plugins.manim.community`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("node-sass"),
            },
            postCssPlugins: [require('autoprefixer')],
            sassOptions: {
                precision: 6,
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content`
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ]
};
