import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "bootstrap";
import "./style.scss";
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
      <header class="border-bottom border-dark mb-4">
        <title>Manim Community Plugins</title>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img
              src="logo.svg"
              width="60"
              height="60"
              alt="Manim Community Logo"
              loading="lazy"
            />
            Manim Community
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#social"
            aria-controls="social"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="social">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://www.manim.community">
                  Home
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Plugins<span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  href="https://docs.manim.community"
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-light">
                    <i class="fas fa-book"></i> Documentation
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/ManimCommunity/manim"
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-light">
                    <i class="fab fa-github"></i> GitHub
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://twitter.com/manim_community/"
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-light">
                    <i class="fab fa-twitter"></i> Twitter
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://discord.gg/mMRrZQW"
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-light">
                    <i class="fab fa-discord"></i> Discord
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.reddit.com/r/manim/"
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-light">
                    <i class="fab fa-reddit"></i> Reddit
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://docs.manim.community/en/latest/conduct.html"
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-light">
                    <i class="fa fa-gavel"></i> Conduct
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main class="main-div">
        <div className="plugin-div">
          {data.allContentJson.nodes.map((element, key) => {
            // <h1 id={key}>{element.info.author_email}</h1>

            let date1 = element.urls[0].upload_time_iso_8601;
            return (
              <div class="child-plugin-div hover-card">
                <strong class="author-name">{element.info.author}</strong>
                <h3 class="plugin-name">
                  {element.info.name} v{element.info.version}
                </h3>
                <div class="plugin-date text-muted">{date1}</div>
                <p class="plugin-summary">{element.info.summary}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
