import React from "react";

function Header(props) {
    return(
        <div className="header">
            <h1 className={props.heading}>{props.inputValue}</h1>
        </div>
    );
}

export default Header;