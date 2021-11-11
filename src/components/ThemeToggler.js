import * as React from "react";
import {ThemeContext} from "./ThemeContext.js";
import {MoonIcon, SunIcon} from "./icons.js";
import "./ThemeToggler.scss";
import Tippy from "@tippyjs/react";

const DarkToggle = () => {
    const {colorMode, setColorMode} = React.useContext(ThemeContext);
    const changeTheme = () => {
        if (colorMode === "dark") {
            setColorMode("light");
        } else {
            setColorMode("dark");
        }
    };
    if (colorMode === "dark") {
        return (
            <Tippy
                content={<span className="tippy-text">Turn on the light</span>}
            >
                <button
                    id="theme-toggle-dark"
                    aria-label="Turn on the light"
                    className="theme-toggle-button"
                    onClick={changeTheme}
                >
                    <SunIcon />
                </button>
            </Tippy>
        );
    } else {
        return (
            <Tippy
                content={<span className="tippy-text">Turn off the light</span>}
            >
                <button
                    id="theme-toggle-light"
                    aria-label="Turn off the light"
                    className="theme-toggle-button"
                    onClick={changeTheme}
                >
                    <MoonIcon />
                </button>
            </Tippy>
        );
    }
};
export {DarkToggle};
