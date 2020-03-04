import React from 'react';
import style from "./Input.module.css"

class Input extends React.Component {

    state={
        error: true,
        name: "",
    }

    onClickHello=()=>{
        if(this.state.name!==""){
            let newName=this.state.name;
            this.state.name="";
            this.props.addFriend(newName);
            alert("Халлёу, "+newName+"! Теперь мы друзья:)");

        }
        else alert("Не знаю, как тебя зовут:(");

    }

    changeInput = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value,
        });
    }


    onEnterPress=(e)=>{
        if(e.key === "Enter")
            this.onClickHello();
    }

    render = () => {
        return (
            <div className={style.input}>
                <input value={this.state.name} onKeyPress={this.onEnterPress} onChange={this.changeInput}  placeholder="Представься, пожалуйста"/>
            </div>
        );
    }
}

export default Input;

