import * as React from "react";
import "./footer.scss";
import {Link} from "gatsby";

const Footer = () => {
    return (
        <div className="super-footer-div">
            <div className="footer-div">
                <div className="column-div">
                    <h2>Learn More</h2>
                    <ul>
                        <li>
                            <a href="https://docs.manim.community/en/stable/installation/versions.html">
                                About Manim
                            </a>
                        </li>
                        <li>
                            <Link href="/plugin">Manim Plugins</Link>
                        </li>
                        <li>
                            <a href="https://docs.manim.community/en/stable/tutorials/quickstart.html">
                                Getting Started
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.manim.community/en/stable/conduct.html">
                                Code of Conduct
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="column-div">
                    <h2>Get Involved</h2>
                    <ul>
                        <li>
                            <a href="https://docs.manim.community/en/stable/contributing.html">
                                Contribute to Manim
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.manim.community/en/stable/reporting_bugs.html">
                                Submit a Bug
                            </a>
                        </li>
                        <li>
                            <a href="https://translate.manim.community">
                                Translate
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="column-div last-child">
                    <h2>Follow Us</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/ManimCommunity/manim">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/manim_community">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/r/manim/">Reddit</a>
                        </li>
                        <li>
                            <a href="https://manim.community/discord">
                                Join Discord
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export {Footer};
