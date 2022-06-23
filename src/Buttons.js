import React from "react";

function Buttons(props) {
    return (
        <div className="buttonsPanel">
            <button onClick={() => {props.buttonsPanel("redColor")}}>red</button>
            <button onClick={() => {props.buttonsPanel("greenColor")}}>green</button>
            <button onClick={() => {props.buttonsPanel("blueColor")}}>blue</button>
        </div>
    );
}

export default Buttons;