import React from "react";

export const ThemeContext = React.createContext({
    colorMode: null,
    setColorMode: function () {}
});

export const ThemeProvider = ({children}) => {
    const [colorMode, rawSetColorMode] = React.useState(undefined);

    React.useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );
        rawSetColorMode(initialColorValue);
    }, []);
    const contextValue = React.useMemo(() => {
        function setColorMode(newValue) {
            const root = window.document.documentElement;
            // 1. Update React color-mode state
            rawSetColorMode(newValue);
            // 2. Update localStorage
            localStorage.setItem("color-mode", newValue);
            // 3. Update the className
            if (colorMode === "dark") {
                root.className = root.className.replace("dark", "");
            } else {
                root.className += " dark";
            }
        }

        return {
            colorMode,
            setColorMode
        };
    }, [colorMode, rawSetColorMode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
