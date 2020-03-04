import React from 'react';
import style from "./Greeting.module.css"
import Input from "./Input/Input";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.newNameRef = React.createRef();
    }

    onClickHello = () => {
        if (this.newNameRef.current.value !== "") {
            let newName = this.newNameRef.current.value;
            this.newNameRef.current.value = "";
            this.props.addFriend(newName);
            alert("Халлёу, " + newName + "! Теперь мы друзья:)");

        } else alert("Не знаю, как тебя зовут:(");

    }

    render = () => {
        return (
            <div className={style.greetingBox}>
                <Input addFriend={this.props.addFriend}/>
                <button onClick={this.onClickHello}>Йоу</button>
            </div>
        );
    }
}

export default Greeting;

