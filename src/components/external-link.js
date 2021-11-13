import * as React from "react";

const ExtLink = props => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    );
};
export {ExtLink};
