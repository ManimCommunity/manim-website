import * as React from "react";
import "./manim-example.scss";
import {useStaticQuery, graphql} from "gatsby";
import {ExampleIcon} from "./icons";
import {
    loadingdefault,
    loading_visible
} from "./manim-examples-loading.module.scss";
import Tippy from "@tippyjs/react";

let number_of_examples = 0;
let currently_showing = 0;
const OnClickHandler = () => {
    const hideAllExample = () => {
        for (let i = 0; i < number_of_examples + 1; i += 1) {
            const exp = document.getElementById("example-" + i);
            exp.className = exp.className.replace("visible", "hidden");
        }
        loading_item.className = loading_item.className.replace(
            "hidden",
            loading_visible
        );
    };
    let old_number = currently_showing;
    currently_showing += 1;
    if (currently_showing > number_of_examples) {
        currently_showing = 0;
    }
    const new_show = document.getElementById("example-" + currently_showing);
    const loading_item = document.getElementById("loading-item");

    hideAllExample();
    setTimeout(function () {
        hideAllExample();
        new_show.className = new_show.className.replace("hidden", "visible");
        loading_item.className = loading_item.className.replace(
            loading_visible,
            "hidden"
        );
        let videoElement = new_show.getElementsByTagName("video");
        if (videoElement.length != 0) {
            videoElement.currentTime = 0;
            videoElement[0].play();
        }
    }, 1000);
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
            <div className="loading-image-div">
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
                                        <p>
                                            Your browser doesn't support HTML5
                                            video. Here is a{" "}
                                            <a
                                                href={
                                                    "/examples/" +
                                                    element.output +
                                                    ".mp4"
                                                }
                                            >
                                                link to the video
                                            </a>{" "}
                                            instead.
                                        </p>
                                    </video>
                                )}
                            </div>
                        </div>
                    );
                })}
                <Tippy
                    content={
                        <span className="tippy-text">Please wait loading.</span>
                    }
                >
                    <div class={loadingdefault + " hidden"} id="loading-item">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Tippy>
            </div>
            <button className="next-button" onClick={OnClickHandler}>
                Another Example
            </button>
        </div>
    );
};
export {ManimExample};
