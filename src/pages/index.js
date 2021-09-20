import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PluginDiv from "../components/plugin_div.js";
import NavBar from "../components/navbar.js";
import "bootstrap";
import "./index.scss";
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
      <title>Manim Community Plugins</title>
      <NavBar />
      <main class="main-div">
        <div className="plugin-div">
          {data.allContentJson.nodes.map((element, key) => (
            <PluginDiv element={element} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
