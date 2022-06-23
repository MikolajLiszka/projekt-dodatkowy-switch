import React, {Component} from "react";
import "./Switch.css";
import Buttons from "./Buttons";
import Header from "./Header";
// import Input from "./Input";

class Switch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: this.props.initValue,
            text: "",
        };

    }

    changeColor = (action) => {

        this.setState(() => {

            let textCurrColor; 
            
            if (action === "redColor") {
                textCurrColor = "red"
            } else if (action === "greenColor") {
                textCurrColor = "green"
            } else if (action === "blueColor") {
                textCurrColor = "blue"
            }

            return ({
                color: textCurrColor,
            }) 
        });
        
    };

    changeText = (event) => {
        this.setState({text: event.target.value})
        console.log(event.target.value)
    }

    render() {      

        return (
                <div className="ButtonsPanel">
                    {/* <h1 className={this.state.color}>Tekst</h1> */}
                    {/* <button onClick={() => {this.changeColor("redColor")}}>red</button>
                    <button onClick={() => {this.changeColor("greenColor")}}>green</button>
                    <button onClick={() => {this.changeColor("blueColor")}}>blue</button> */}
                    <Header heading={this.state.color} inputValue={this.state.text} />
                    <input onChange={this.changeText}  type="text"/>
                    <Buttons buttonsPanel={this.changeColor}/>
                </div>
        )
    }
}

export default Switch;