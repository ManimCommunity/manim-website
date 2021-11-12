import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import {useLocation} from "@reach/router";
import {useStaticQuery, graphql} from "gatsby";

const SEO = ({title, description, image, article}) => {
    const {pathname} = useLocation();
    const {site} = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <link rel="canonical" href={seo.url} />
            <meta property="og:author" content="Manim Community" />
            <meta name="description" content={seo.description} />
            <meta
                property="og:type"
                content={article ? "article" : "website"}
            />
            <meta name="og:description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            <meta name="image" content={seo.image} />
            {seo.image && <meta property="og:image" content={seo.image} />}

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ece6e2" />

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

            <script type="application/ld+json">
                {`
            {
                "@context": "https://schema.org/",
                "@type": "Organization",
                "name": "Manim Community",
                "url": "https://www.manim.community",
                "logo": "https://www.manim.community/logo.png",
                "email": "devs(at)manim.community",
                "description": "Manim is a community-maintained Python library for creating mathematical animations."   
            }`}
            </script>
        </Helmet>
    );
};

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool
};

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                twitterUsername
            }
        }
    }
`;
