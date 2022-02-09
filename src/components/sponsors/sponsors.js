import * as React from "react";
import "./sponsors.scss";
import {StaticImage} from "gatsby-plugin-image";
import {CloudIcon} from "../icons";
import {ThemeContext} from "../ThemeContext.js";

const Sponsors = () => {
    const {colorMode} = React.useContext(ThemeContext);
    return (
        <div className="sponsors-div" id="sponsors">
            <div className="icon-div">
                <CloudIcon />
            </div>
            <h2>Our Sponsors</h2>
            <p>
                We are grateful for the support received by the following
                organizations:
            </p>
            <div className="sponsor-flex">
                <div className="sponsor">
                    <a
                        href="https://tutanota.com/"
                        rel="sponsored noreferrer noopener"
                        target="_blank"
                    >
                        <StaticImage
                            src="./tutanota-logo-red-black-font.png"
                            alt="Tutanota Logo"
                            height="100"
                            placeholder="blurred"
                        />
                        <p className="sponsor-title">Tutanota</p>
                    </a>
                </div>
                <div className="sponsor">
                    <a
                        href="https://www.nuclino.com"
                        rel="sponsored noreferrer noopener"
                        target="_blank"
                    >
                        <StaticImage
                            src="./nuclino-logo.png"
                            alt="Nuclino Logo"
                            height="100"
                            placeholder="blurred"
                        />
                        <p className="sponsor-title">Nuclino</p>
                    </a>
                </div>
                {colorMode === "dark" ? (
                    <div className="sponsor">
                        <a
                            href="https://1password.com"
                            rel="sponsored noreferrer noopener"
                            target="_blank"
                        >
                            <StaticImage
                                src="./1password/White/1P-wordmark.svg"
                                alt="1Password Logo"
                                height="100"
                                placeholder="blurred"
                            />
                            <p className="sponsor-title">1Password</p>
                        </a>
                    </div>
                ) : (
                    <div className="sponsor">
                        <a
                            href="https://1password.com"
                            rel="sponsored noreferrer noopener"
                            target="_blank"
                        >
                            <StaticImage
                                src="./1password/Black/1P-wordmark.svg"
                                alt="1Password Logo"
                                height="100"
                                placeholder="blurred"
                            />
                            <p className="sponsor-title">1Password</p>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
export {Sponsors};
