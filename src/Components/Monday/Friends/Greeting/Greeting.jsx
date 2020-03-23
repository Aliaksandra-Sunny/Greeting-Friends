import React from 'react';
import style from "./Greeting.module.css"
import Input from "./Input/Input";
import Button from "./Button/Button";

class Greeting extends React.Component {

    state = {
        inputData: "",
    };

    readInput = (data) => {
        this.setState({
            inputData: data,
        })
    };

    sayHello = () => {
        if (this.state.inputData !== "") {
            let newName = this.state.inputData;
            this.setState({
                inputData: "",
            });
            this.props.addFriend(newName);
            alert("Халлёу, " + newName + "! Теперь мы друзья:)");
        }
    };

    render = () => {
        return (
            <div className={style.greetingBox}>
                <Input readInput={this.readInput}  sayHello={this.sayHello} addFriend={this.props.addFriend}/>
                <Button name="Hello" func={this.sayHello}/>
            </div>
        );
    }
}

export default Greeting;

