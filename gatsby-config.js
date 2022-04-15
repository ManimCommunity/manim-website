module.exports = {
    siteMetadata: {
        title: "Manim Community",
        titleTemplate: "%s",
        description:
            "Manim is a community-maintained Python library for creating mathematical animations.",
        url: `https://www.manim.community`, // No trailing slash allowed!
        image: "/banner.png", // Path to the image placed in the 'static' folder, in the project's root directory.
        twitterUsername: "@manim_community",
        siteUrl: `https://www.manim.community`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
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
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // GitHub Flavored Markdown mode
                gfm: true,
                // Plugins configs
                plugins: [`gatsby-remark-prismjs`]
            }
        },
        `gatsby-plugin-sitemap`
    ]
};
