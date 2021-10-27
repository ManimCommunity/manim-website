import * as React from "react";
import {ThemeContext} from "./ThemeContext.js";
import {MoonIcon, SunIcon} from "./icons.js";

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
            <button
                id="theme-toggle-dark"
                aria-label="theme-toggle"
                className="theme-toggle-button"
                onClick={changeTheme}
            >
                <MoonIcon />
            </button>
        );
    } else {
        return (
            <button
                id="theme-toggle-light"
                aria-label="theme-toggle"
                className="theme-toggle-button"
                onClick={changeTheme}
            >
                <SunIcon />
            </button>
        );
    }
    return <label>Dark</label>;
};
export {DarkToggle};
