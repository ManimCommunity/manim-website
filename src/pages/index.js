import * as React from "react";
import {ManimBanner} from "../components/manim-banner";
import NavBar from "../components/navbar";
import "./index.scss";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faBook } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {
    return (
        <div>
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
                        <FontAwesomeIcon icon={faBook}/> Documentation
                    </Link>
                    <Link href="https://docs.manim.community/en/stable/examples.html">
                        <FontAwesomeIcon icon={faPlayCircle} /> Examples
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default IndexPage;
