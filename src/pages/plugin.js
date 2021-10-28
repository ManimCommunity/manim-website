import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import PluginDiv from "../components/plugin_div.js";
import NavBar from "../components/navbar.js";
import {Footer} from "../components/footer.js";

import "./plugin.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentJson(limit: 10) {
                nodes {
                    info {
                        author
                        author_email
                        name
                        version
                        summary
                        license
                        home_page
                        project_url
                        package_url
                    }
                    urls {
                        upload_time_iso_8601(formatString: "MMM D, yyyy")
                    }
                }
            }
        }
    `);
    return (
        <div>
            <title>Manim Community Plugin Library</title>
            <NavBar />
            <main class="main-div">
                <div className="welcome-screen">
                    <h1 className="welcome-title">
                        Welcome to the{" "}
                        <span>Manim Community Plugin Library</span>
                    </h1>
                    <div className="welcome-text-div">
                        <p className="welcome-text">
                            Add functionality and extend Manim with plugins
                            built by our amazing developer community.
                        </p>
                    </div>
                    <div className="plugin-div">
                        {data.allContentJson.nodes.map((element, key) => (
                            <PluginDiv element={element} key={key} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default IndexPage;
