import * as React from "react";
import "./sponsors.scss";
import {StaticImage} from "gatsby-plugin-image";
import {CloudIcon} from "../icons";

const Sponsors = () => {
    return (
        <div className="sponsors-div" id="sponsors">
            <div className="icon-div">
                <CloudIcon />
            </div>

            <h2>Our Sponsors</h2>
            <p>Manim is proudly sponsored by the following organizations</p>
            <div className="sponsor-flex">
                <div className="sponsor">
                    <a href="https://tutanota.com/">
                        <StaticImage
                            src="./tutanota.png"
                            alt="Tutanota Logo"
                            placeholder="blurred"
                        />
                        <p>Tutanota</p>
                    </a>
                </div>
            </div>
        </div>
    );
};
export {Sponsors};
