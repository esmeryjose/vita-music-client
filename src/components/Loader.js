import React from "react";
import spinner from "../assets/spinner.gif";

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="" />
        </div>
    );
};

export default Loader;
