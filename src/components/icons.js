import * as React from "react";
import "./icons.scss";

// Created by Naveen M K
// Licensed under CC0.
const MoonIcon = () => {
    return (
        <svg
            id="moon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentcolor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M21 12.79A9 9 0 1111.210 3.0 7.0 7.0 0 0021 12.79z"></path>
        </svg>
    );
};

// Created by Naveen M K using Inkscape
// Licensed under CC0.
const SunIcon = () => {
    return (
        <svg
            id="sun"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentcolor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    );
};

// From https://github.com/logos
// Converted to SVG using Inkscape
const GithubIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="github-icon"
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    );
};

// Designed by Naveen
// License CC0
const CliIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cli-icon"
        >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
    );
};

// Created by Naveen M K
// License CC0
const GiftIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="gift-icon"
        >
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect x="2" y="7" width="20" height="5"></rect>
            <line x1="12" y1="22" x2="12" y2="7"></line>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
    );
};

// Taken from https://pypi.org
const PypiLogo = () => {
    return <img src="/pypi.svg" alt="PyPI" width="30" height="30" />;
};

// Taken from https://chocolater.org
const ChocoLogo = () => {
    return (
        <img src="/chocolatey.svg" alt="Chocolatey" width="30" height="30" />
    );
};

// Taken from https://commons.wikimedia.org/wiki/File:Windows_logo_-_2021.svg
const WindowsLogo = () => {
    return <img src="/windows.svg" alt="Windows" width="30" height="30" />;
};

// Taken from https://github.com/garrett/Tux/blob/main/tux.svg
const LinuxLogo = () => {
    return <img src="/tux.svg" alt="Tux" width="25" height="30" />;
};

// Taken from https://commons.wikimedia.org/wiki/File:MacOS_wordmark_(2017).svg
const MacLogo = () => {
    return <img src="/macos.svg" alt="macOS Logo" width="40" height="30" />;
};

// Created by Naveen M K
// License CC0
const CopiedIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="copied-icon"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    );
};

// From https://github.com/mikolajdobrucki/ikonate
// Licensed under MIT License
const CloudIcon = () => {
    return (
        <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="thunderIconTitle"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="miter"
            fill="none"
            className="cloud-icon"
        >
            <polyline points="13 15 14 18 12 18 13 21" />
            <path d="M19.051177,17.9568482 C20.5,17.9709234 22,16.2454604 22,14.5 C22,12.7095527 20.6555928,11.2331085 18.9211951,11.0250841 C18.4554927,8.17503894 15.9817502,6 13,6 C10.711801,6 8.72277,7.28089089 7.71081142,9.16476838 C7.3255638,9.05739789 6.9194849,9 6.5,9 C4.01471863,9 2,11.0147186 2,13.5 C2,15.8113421 3.5,17.9709234 5.98562648,17.9709234 C5.98562648,17.9709234 6.32375099,17.9709234 7,17.9709234" />
        </svg>
    );
};

// Created by Naveen M K
// Licensed under CC0

const HeartIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="heart-icon"
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );
};

// Created by Naveen M K
// License CC0
const ExampleIcon = () => {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 13.229166 13.229167"
            version="1.1"
            id="svg5"
            fill="none"
            stroke="#000000"
            stroke-width="0.8"
            className="example-icon"
        >
            <g id="layer1">
                <g id="g1224">
                    <rect
                        width="6.5033894"
                        height="6.5033898"
                        x="1.6436923"
                        y="1.6436923"
                    />
                    <circle cx="7.9553561" cy="7.967411" r="4" />
                </g>
            </g>
        </svg>
    );
};
export {
    MoonIcon,
    SunIcon,
    GithubIcon,
    CliIcon,
    GiftIcon,
    PypiLogo,
    CopiedIcon,
    CloudIcon,
    HeartIcon,
    ExampleIcon,
    ChocoLogo,
    WindowsLogo,
    LinuxLogo,
    MacLogo
};
