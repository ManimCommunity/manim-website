import * as React from "react";
import "./manim-example.scss";
import {useStaticQuery, graphql} from "gatsby";

const ManimExample = () => {
    const data = useStaticQuery(graphql`
        query MyExamplesQuery {
            allManimExample {
                nodes {
                    code
                    output
                }
            }
        }
    `);
    const examples = data.allManimExample.nodes;
    console.log(data);
    return (
        <div className="example-div">
            <h2>Examples</h2>
            {examples.map((element, key) => (
                <div className="main-example" key={key}>
                    <pre className="example-child">
                        <code className="language-python">{element.code}</code>
                    </pre>
                    <img
                        src={"/examples/" + element.output}
                        className="example-child"
                    />
                </div>
            ))}
        </div>
    );
};
export {ManimExample};
