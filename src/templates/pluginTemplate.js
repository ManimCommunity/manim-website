import React from "react";
import NavBar from "../components/navbar.js";
import "./pluginTemplate.scss";

const basicTemplate = props => {
    const {pageContext} = props;
    const {pageContent} = pageContext;

    return (
        <div>
            <NavBar />
            <div
                className="plugin-info-div"
                dangerouslySetInnerHTML={{__html: pageContent.info.description}}
            />
        </div>
    );
};
export default basicTemplate;
