import * as React from "react";
import {ManimBanner} from "../components/manim-banner";
import NavBar from "../components/navbar";
import "./index.scss";
import {Footer} from "../components/footer";
import Prism from "prismjs";
import {ManimExample} from "../components/manim-example.js";
import {Sponsors} from "../components/sponsors/sponsors.js";
import {GithubIcon, CliIcon, GiftIcon, PypiLogo} from "../components/icons";

const IndexPage = () => {
    React.useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll();
    });

    return (
        <div>
            <title>Manim Community - Homepage</title>
            <NavBar />
            <div className="index-main-div">
                <ManimBanner />
                <div className="about-manim-div">
                    <p>
                        Community maintained Python library for creating
                        mathematical animations.
                    </p>
                    <div className="button-div">
                        <a
                            href="https://github.com/manimCommunity/manim"
                            className="button-link"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <GithubIcon />
                            Star on Github
                        </a>
                        <a
                            href="https://docs.manim.community/en/stable/tutorials/quickstart.html"
                            className="button-link"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <CliIcon />
                            Getting Started
                        </a>
                    </div>
                    <div className="install-manim-div">
                        <div className="install-manim-text">
                            <GiftIcon />
                            Install Manim
                        </div>
                        <div className="install-manim-button">
                            <div>
                                <PypiLogo />
                            </div>
                            hi hello
                        </div>
                    </div>
                </div>
                <ManimExample />
                <Sponsors />
            </div>
            <Footer />
        </div>
    );
};
export default IndexPage;
