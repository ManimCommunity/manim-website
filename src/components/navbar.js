import * as React from "react";
import "./navbar.scss";
import Headroom from "react-headroom";
import {DarkToggle} from "./ThemeToggler.js";


export default function NavBar() {
    return (
        <Headroom>
            <header className="main-header">
                <div className="main-header-div">
                    <div className="logo-and-links-div">
                        <div className="manim-logo-div">
                            <a
                                className="manim-logo-a"
                                href="/"
                                aria-label="Go to Homepage"
                            >
                                <img
                                    src="/logo.svg"
                                    width="60"
                                    height="60"
                                    alt="Manim Community Logo"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="nav-items">
                            <nav>
                                <ul role="menubar">
                                    <li role="none">
                                        <a href="https://docs.manim.community/">
                                            Docs
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a
                                            href="https://github.com/ManimCommunity/manim"
                                            className="nav-link"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a
                                            href="https://try.manim.community"
                                            className="nav-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Try Manim Online
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <DarkToggle />
                    </div>
                   
                    
                </div>
            </header>
        </Headroom>
    );
}
