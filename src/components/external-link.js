import * as React from "react";

const ExtLink = props => {
    if (props.refer === true) {
        return <a href={props.href}>{props.children}</a>;
    } else {
        return (
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.children}
            </a>
        );
    }
};
export {ExtLink};
