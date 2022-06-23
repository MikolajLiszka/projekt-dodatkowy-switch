import React, {Component} from "react";
import "./Switch.css";

class Switch extends Component {
    render() {
        let text = <h1>Napis do zmiany</h1>;
        
        changeColor = (action) => {

            if (action === "redA") {
                text.cssClass = "red";
                console.log("dupa");
            } else if (action === "greenA") {
                text.cssClass = "green";
            } else if (action === "blueA") {
                text.cssClass = "blue";
            }
        };

        return (
            <header>
                <div className="ButtonsPanel">
                    {text}
                    <button onClick={() => {changeColor("redA")}}>red</button>
                    <button onClick={this.changeValue}>green</button>
                    <button onClick={this.changeValue}>blue</button>
                </div>
            </header>
        )
    }
}

export default Switch;