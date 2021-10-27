import "@fontsource/ibm-plex-sans";
import "@fontsource/plus-jakarta-sans";
import React from "react";

import App from "./src/components/App";

export const wrapRootElement = ({element}) => {
    return <App>{element}</App>;
};
