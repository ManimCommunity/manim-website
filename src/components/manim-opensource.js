import * as React from "react";
import {HeartIcon, CliIcon} from "./icons";
import "./manim-opensource.scss";

const OpenSource = () => {
    return (
        <div className="opensource-div">
            <HeartIcon />
            <h2>Free and Open Source</h2>
            <p>
                Manim is a free and open-source project originally written by
                Grant Sanderson. It is now maintained by the Manim Community and
                permissively released under the MIT license.
            </p>
            <a
                href="https://docs.manim.community/en/stable/contributing.html"
                className="button-link"
                rel="noreferrer noopener"
                target="_blank"
            >
                <CliIcon />
                Contribute to Manim
            </a>
        </div>
    );
};
export {OpenSource};
