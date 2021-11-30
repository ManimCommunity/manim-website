import * as React from "react";
import {ManimBanner} from "../components/manim-banner";
import NavBar from "../components/navbar";
import "./index.scss";
import {Footer} from "../components/footer";
import Prism from "prismjs";
import {ManimExample} from "../components/manim-example.js";
import {Sponsors} from "../components/sponsors/sponsors.js";
import {
    MacLogo,
    GithubIcon,
    CliIcon,
    GiftIcon,
    WindowsLogo,
    LinuxLogo
} from "../components/icons";
import {OpenSource} from "../components/manim-opensource";
import Tippy from "@tippyjs/react";
import SEO from "../components/seo";
import {ExtLink} from "../components/external-link";

const IndexPage = () => {
    React.useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll();
    });

    return (
        <div>
            <SEO />
            <NavBar />
            <div className="index-main-div">
                <ManimBanner />
                <div className="about-manim-div">
                    <p>
                        A community maintained Python library for creating
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
                            <div className="install-manim-logo">
                                <WindowsLogo />
                            </div>
                            <Tippy content="View installation docs for Windows.">
                                <div
                                    className="install-manim-text"
                                    id="install-manim-command"
                                    role="button"
                                >
                                    <ExtLink href="https://docs.manim.community/en/stable/installation/windows.html">
                                        Install on Windows
                                    </ExtLink>
                                </div>
                            </Tippy>
                        </div>

                        <div className="install-manim-button">
                            <div className="install-manim-logo">
                                <LinuxLogo />
                            </div>
                            <Tippy content="View installation docs for Linux.">
                                <div
                                    className="install-manim-text"
                                    id="install-manim-command"
                                    role="button"
                                >
                                    <ExtLink href="https://docs.manim.community/en/stable/installation/linux.html">
                                        Install on Linux
                                    </ExtLink>
                                </div>
                            </Tippy>
                        </div>
                        <div className="install-manim-button">
                            <div className="install-manim-logo">
                                <MacLogo />
                            </div>
                            <Tippy content="View installation docs for macOS.">
                                <div
                                    className="install-manim-text"
                                    id="install-manim-command"
                                    role="button"
                                >
                                    <ExtLink href="https://docs.manim.community/en/stable/installation/macos.html">
                                        Install on macOS
                                    </ExtLink>
                                </div>
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
