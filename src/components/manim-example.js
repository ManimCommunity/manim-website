import * as React from "react";
import "./manim-example.scss";

const ManimExample = () => {
    const example_scene = `
from manim import *
class SquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        square = Square()
        square.flip(RIGHT)
        square.rotate(-3 * TAU / 8)
        circle.set_fill(PINK, opacity=0.5)
        self.play(Create(square))
        self.play(Transform(square, circle))
        self.play(FadeOut(square))`;
    return (
        <div className="main-example">
            <pre>
                <code className="language-python">{example_scene}</code>
            </pre>
            <video autoplay loop muted playsinline>
                <source
                    src="/videos/SquareToCircle.webm"
                    type="video/webm"
                />
                <source
                    src="/videos/SquareToCircle.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};
export {ManimExample};
