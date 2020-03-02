import React from 'react';
import style from "./Greeting.module.css"

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.newNameRef=React.createRef();
    }

    onClickHello=()=>{
        if(this.newNameRef.current.value!==""){
            let newName=this.newNameRef.current.value;
            this.newNameRef.current.value="";
            alert("Халлёу, "+newName+"!:)");
            this.props.addFriend();
        }
        else alert("Не знаю, как тебя зовут:(");

    }
    render = () => {
        return (
            <div className={style.greetingBox}>
                <input ref={this.newNameRef}  placeholder="Ну-ка представься"/>
                <button onClick={this.onClickHello}>Йоу</button>
            </div>
        );
    }
}

export default Greeting;

