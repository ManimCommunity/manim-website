import * as React from "react";
import NavBar from "../components/navbar.js";
import {out_div, html_body} from "./articleTemplate.module.scss";
import {graphql} from "gatsby";
import SEO from "../components/seo.js";
import {Footer} from "../components/footer.js";

export const query = graphql`
    query ($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                description
            }
        }
    }
`;

const ArticleTemplate = ({data}) => {
    const post = data.markdownRemark;

    return (
        <div>
            <NavBar />
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article
                className={out_div}
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>Last Modified on {post.frontmatter.date}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{__html: post.html}}
                    itemProp="articleBody"
                    className={html_body}
                />
                <hr />
            </article>
            <Footer />
        </div>
    );
};

export default ArticleTemplate;
