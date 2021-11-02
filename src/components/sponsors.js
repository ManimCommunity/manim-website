import * as React from "react";
import "./sponsors.scss";

const Sponsor = props => {
    return (
        <div className="sponsor">
            <img src={props.img} />
            <p>{props.name}</p>
        </div>
    );
};

const Sponsors = () => {
    return (
        <div className="sponsors-div">
            <h2>Sponsors</h2>
            <div className="sponsor-flex">
                {/* <Sponsor
                    img="https://d2srrzh48sp2nh.cloudfront.net/enterprise/87aa097e/images/logo/emblem.svg"
                    name="Crowdin"
                /> */}
                
            </div>
        </div>
    );
};
export {Sponsors};
