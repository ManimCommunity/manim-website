import * as React from "react";
import { HeartIcon, CliIcon } from "./icons";
import "./manim-opensource.scss"

const OpenSource = () => {
    return (
        <div className="opensource-div">
            <HeartIcon />
            <h2>Free Open-Source, MIT License</h2>
            <p>Manim is a free, open-source project originally written by 3blue1brown and maintained by Manim Community.</p>
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
export { OpenSource };
