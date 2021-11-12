import React from "react";
import {Helmet} from "react-helmet";

const DiscordRedirect = () => {
    return (
        <Helmet>
            <meta
                http-equiv="refresh"
                content="0; url='https://discord.gg/bYCyhM9Kz2'"
            />
        </Helmet>
    );
};
export default DiscordRedirect;
