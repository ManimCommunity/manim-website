import React from "react";

const basicTemplate = props => {
  const {pageContext} = props;
  const {pageContent} = pageContext;

  return (
    <div style={{maxWidth: `960px`, margin: `1.45rem`}}>
      <h1>{pageContent.info.name}</h1>
      <h2>{pageContent.info.summary}</h2>
      <div dangerouslySetInnerHTML={{__html: pageContent.info.description}} />
    </div>
  );
};
export default basicTemplate;
