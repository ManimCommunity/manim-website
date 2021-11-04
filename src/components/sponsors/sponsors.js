import * as React from "react";
import "./sponsors.scss";
import {StaticImage} from "gatsby-plugin-image";

const Sponsors = () => {
    return (
        <div className="sponsors-div">
            <h2>Sponsors</h2>
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
