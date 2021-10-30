import * as React from "react";
import {ManimBanner} from "../components/manim-banner";
import NavBar from "../components/navbar";
import "./index.scss";
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle, faBook} from "@fortawesome/free-solid-svg-icons";
import {Footer} from "../components/footer";
import Prism from "prismjs";
import {ManimExample} from "../components/manim-example.js";
// The code we will be displaying
const code = `from manim import *
class HelloWorld(Scene):
    def construct(self):
        a = Square()
        self.add(a)
`;

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
                <p>
                    <b>Manim</b> is a community-maintained Python library for
                    creating mathematical animations.
                </p>
                <p>
                    Check out examples in our documentation, find the source
                    code on GitHub — and come hang out with us on Discord or
                    Reddit!
                </p>
                <div className="link-div">
                    <Link href="https://docs.manim.community">
                        <FontAwesomeIcon icon={faBook} /> Documentation
                    </Link>
                    <Link href="https://docs.manim.community/en/stable/examples.html">
                        <FontAwesomeIcon icon={faPlayCircle} /> Examples
                    </Link>
                </div>
                <ManimExample />
            </div>
            <Footer />
        </div>
    );
};
export default IndexPage;
