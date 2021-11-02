import * as React from "react";
import "./manim-example.scss";

const ManimExample = () => {
    const example_scene = `
from manim import *
class CircleExample(Scene):
    def construct(self):
        circle = Circle(color=BLUE, fill_opacity=0.5)
        self.add(circle)
    `;
    return (
        <div className="main-example">
            <pre>
                <code className="language-python">{example_scene}</code>
            </pre>
            <img src="/CircleExample.png" />
        </div>
    );
};
export {ManimExample};
