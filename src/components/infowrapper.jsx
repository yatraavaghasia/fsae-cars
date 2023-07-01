import React from "react";
import Info from "./info";
import "./infowrapper.css"
function InfoWrapper()
{
    return (
        <div className="infowrapper">
            <div className="headinginfo">
                <h2>OUR CARS OVER THE YEARS</h2>
            </div>
            <Info />
        </div>
    );
}
export default InfoWrapper;