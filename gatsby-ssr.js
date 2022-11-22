import React from "react";
import {minify} from "terser";
const MagicScriptTag = () => {
    const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem("color-mode");
        const hasPersistedPreference = typeof persistedColorPreference === "string";
        if (hasPersistedPreference) {
            return persistedColorPreference;
        }
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const hasMediaQueryPreference = typeof mql.matches === "boolean";
        if (hasMediaQueryPreference) {
            return mql.matches ? "dark" : "light";
        }
        return "light";
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    if (colorMode === 'dark'){
        root.className += ' dark';
    }
    root.style.setProperty('--initial-color-mode', colorMode);
  })()
    `;
    const minified = minify(codeToRunOnClient);
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{__html: minified.code}} />;
};
export const onRenderBody = ({setPreBodyComponents}) => {
    setPreBodyComponents(<MagicScriptTag key="unique" />);
};
