import React from "react";
import NavBar from "../components/navbar.js";

const basicTemplate = props => {
  const {pageContext} = props;
  const {pageContent} = pageContext;

  return (
    <div className="container">
      <NavBar />
      <h1>{pageContent.info.name}</h1>
      <h2>{pageContent.info.summary}</h2>
      <div dangerouslySetInnerHTML={{__html: pageContent.info.description}} />
    </div>
  );
};
export default basicTemplate;
