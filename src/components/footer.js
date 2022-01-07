import * as React from "react";
import {ExtLink} from "./external-link";
import {Link } from 'gatsby';
import "./footer.scss";

const Footer = () => {
    return (
        <div className="super-footer-div">
            <div className="footer-div">
                <div className="column-div">
                    <h2>Learn More</h2>
                    <ul>
                        <li>
                            <ExtLink
                                href="https://docs.manim.community/en/stable/installation/versions.html"
                                refer={true}
                            >
                                About Manim
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink href="https://plugins.manim.community">
                                Manim Plugins
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink
                                href="https://docs.manim.community/en/stable/tutorials/quickstart.html"
                                refer={true}
                            >
                                Getting Started
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink
                                href="https://docs.manim.community/en/stable/conduct.html"
                                refer={true}
                            >
                                Code of Conduct
                            </ExtLink>
                        </li>
                        <li>
                            <Link to='/governance'>Governance</Link>
                        </li>
                    </ul>
                </div>
                <div className="column-div">
                    <h2>Get Involved</h2>
                    <ul>
                        <li>
                            <ExtLink
                                href="https://docs.manim.community/en/stable/contributing.html"
                                refer={true}
                            >
                                Contribute to Manim
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink
                                href="https://docs.manim.community/en/stable/reporting_bugs.html"
                                refer={true}
                            >
                                Submit a Bug
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink href="https://translate.manim.community">
                                Translate
                            </ExtLink>
                        </li>
                    </ul>
                </div>
                <div className="column-div last-child">
                    <h2>Follow Us</h2>
                    <ul>
                        <li>
                            <ExtLink
                                href="https://github.com/ManimCommunity/manim"
                                refer={true}
                            >
                                Github
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink href="https://twitter.com/manim_community">
                                Twitter
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink href="https://www.reddit.com/r/manim/">
                                Reddit
                            </ExtLink>
                        </li>
                        <li>
                            <ExtLink href="https://manim.community/discord">
                                Join Discord
                            </ExtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export {Footer};
