module.exports = {
    siteMetadata: {
        title: "Manim Community",
        titleTemplate: "%s",
        description:
            "Manim is a community-maintained Python library for creating mathematical animations.",
        url: `https://manim.community`, // No trailing slash allowed!
        image: "/banner.png", // Path to the image placed in the 'static' folder, in the project's root directory.
        twitterUsername: "@manim_community"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("node-sass")
            },
            postCssPlugins: [require("autoprefixer")],
            sassOptions: {
                precision: 6
            }
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
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`
    ]
};
