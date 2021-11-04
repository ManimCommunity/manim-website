import * as React from "react";
import "./sponsors.scss";

const Sponsor = props => {
    return (
        <div className="sponsor">
            <a href={props.link}>
                <img src={props.img} />
                <p>{props.name}</p>
            </a>
        </div>
    );
};

const Sponsors = () => {
    return (
        <div className="sponsors-div">
            <h2>Sponsors</h2>
            <div className="sponsor-flex">
                <Sponsor
                    img="/sponsors/tutanota-logo-red-black-font.png"
                    name="Tutanota"
                    link="https://tutanota.com/"
                />
            </div>
        </div>
    );
};
export {Sponsors};
