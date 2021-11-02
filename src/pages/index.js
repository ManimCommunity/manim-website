import * as React from "react";
import {ManimBanner} from "../components/manim-banner";
import NavBar from "../components/navbar";
import "./index.scss";
import {Footer} from "../components/footer";
import Prism from "prismjs";
import {ManimExample} from "../components/manim-example.js";


const IndexPage = () => {
    React.useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll();
    });

    return (
        <div>
            <title>Manim Community - Homepage</title>
            <NavBar />
            <div className="index-main-div">
                <ManimBanner />
                <div className="about-manim-div">
                    <p>
                        <b>Manim</b> is a community-maintained Python library
                        for creating mathematical animations.
                    </p>
                    <div className="get-started-link-div">
                        <a
                            href="https://docs.manim.community/en/stable/tutorials/quickstart.html"
                            className="get-started-link"
                        >
                            Get started with Manim
                        </a>
                    </div>
                </div>
                <ManimExample />
            </div>
            <Footer />
        </div>
    );
};
export default IndexPage;
