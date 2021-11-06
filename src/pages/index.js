import * as React from "react";
import {ManimBanner} from "../components/manim-banner";
import NavBar from "../components/navbar";
import "./index.scss";
import {Footer} from "../components/footer";
import Prism from "prismjs";
import {ManimExample} from "../components/manim-example.js";
import {Sponsors} from "../components/sponsors/sponsors.js";
import {
    GithubIcon,
    CliIcon,
    GiftIcon,
    PypiLogo,
    CopiedIcon
} from "../components/icons";
import {OpenSource} from "../components/manim-opensource";
import Tippy from "@tippyjs/react";

const onClickCopy = () => {
    if (navigator.clipboard) {
        const element = document.getElementById("install-manim-command");
        let text = element.innerText.trim();
        if (text.startsWith("$")) {
            text = text.substr(1).trimLeft();
        }
        navigator.clipboard.writeText(text);
    }
};
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
                            <div className="install-manim-pypi-logo">
                                <PypiLogo />
                            </div>
                            <Tippy
                                content={
                                    <span className="tippy-text">
                                        <CopiedIcon />
                                        Copied to Clipboard
                                    </span>
                                }
                                trigger="click"
                                interactive={true}
                                interactiveDebounce="40"
                                duration={100}
                            >
                                <Tippy content="Copy to Clipboard">
                                    <div
                                        className="install-manim-text"
                                        onClick={onClickCopy}
                                        id="install-manim-command"
                                    >
                                        pip install manim
                                    </div>
                                </Tippy>
                            </Tippy>
                        </div>
                    </div>
                </div>
                <ManimExample />
                <OpenSource />
                <Sponsors />
            </div>
            <Footer />
        </div>
    );
};
export default IndexPage;
