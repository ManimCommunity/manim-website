import * as React from "react";
import "./manim-example.scss";
import { useStaticQuery, graphql } from "gatsby";
import { ExampleIcon } from "./icons";
import Tippy from "@tippyjs/react";

let number_of_examples = 0;
let currently_showing = 0;
const OnClickHandler = () => {
    let old_number = currently_showing;
    currently_showing += 1;
    if (currently_showing > number_of_examples) {
        currently_showing = 0;
    }
    const curr_show = document.getElementById("example-" + old_number);
    const new_show = document.getElementById("example-" + currently_showing);

    new_show.className = new_show.className.replace("hidden", "visible");
    curr_show.className = curr_show.className.replace("visible", "hidden");
};

const ManimExample = () => {
    const data = useStaticQuery(graphql`
        query MyExamplesQuery {
            allManimExample {
                nodes {
                    code
                    output
                    visible
                    type
                }
                totalCount
            }
        }
    `);
    const examples = data.allManimExample.nodes;
    number_of_examples = data.allManimExample.totalCount - 1;
    return (
        <div className="example-div">
            <ExampleIcon />
            <h2>Examples</h2>
            {examples.map((element, key) => {
                return (
                    <div
                        className={"main-example " + element.visible}
                        key={key}
                        id={"example-" + key}
                    >
                        <pre className="example-child">
                            <code className="language-python">
                                {element.code}
                            </code>
                        </pre>
                        <div className="example-child img-div">
                            {element.type === "image" ? (
                                <img
                                    src={"/examples/" + element.output}
                                    className="example-child"
                                    alt={element.name}
                                />
                            ) : (
                                <video loop="" controls={true}>
                                    <source
                                        src={
                                            "/examples/" +
                                            element.output +
                                            ".webm"
                                        }
                                        type="video/webm"
                                    />
                                    <source
                                        src={
                                            "/examples/" +
                                            element.output +
                                            ".mp4"
                                        }
                                        type="video/mp4"
                                    />
                                </video>
                            )}
                        </div>
                    </div>
                );
            })}
            <button className="next-button" onClick={OnClickHandler}>
                Another Example
            </button>
        </div>
    );
};
export { ManimExample };
