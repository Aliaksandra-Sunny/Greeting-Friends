import React from 'react';
import style from "./Input.module.css"

class Input extends React.Component {

    state = {
        error: true,
        name: "",
    };

    changeInput = (e) => {
        if (e.currentTarget.value !== "") {
            this.setState({
                error: false,
                name: e.currentTarget.value,
            });
        } else {
            this.setState({
                error: true,
                name: e.currentTarget.value,
            });
        }
        this.props.readInput(e.currentTarget.value);
    };


    onEnterPress = (e) => {
        if (e.key === "Enter") {
            if (this.state.name !== "") {
                this.props.sayHello();
                this.setState({
                    name: "",
                    error: true,
                });
            }
        }
    };

    render = () => {
        return (
            <div className={style.input}>
                <input className={this.state.error ? style.error : ""}
                       value={this.state.name}
                       onChange={this.changeInput}
                       onKeyPress={this.onEnterPress} placeholder="Представься, пожалуйста"/>
            </div>
        );
    }
}

export default Input;

