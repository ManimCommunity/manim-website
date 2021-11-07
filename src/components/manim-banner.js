import * as React from "react";
import {ThemeContext} from "./ThemeContext.js";
import "./manim-banner.scss";

const ManimBanner = () => {
    const {colorMode} = React.useContext(ThemeContext);
    if (!colorMode) {
        return <img src="banner-light.svg" className="manim-banner" alt="Manim banner light" />;
    }
    if (colorMode === "dark") {
        return <img src="banner-dark.svg" className="manim-banner" alt="Manim banner dark"/>;
    } else if (colorMode === "light") {
        return <img src="banner-light.svg" className="manim-banner" alt="Manim banner light"/>;
    }
};
export {ManimBanner};
