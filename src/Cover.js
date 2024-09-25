import React from "react";
import "./Cover.css";
import kaze from "./images/kaze.png";

function Cover() {
    return (
        <div className="container">
            <div className="container-img">
                <img src={kaze} alt="kaze" />
                <div className="container-text">
                    <p>Kaze</p>
                </div>
            </div>
        </div>
    );
}

export default Cover;
