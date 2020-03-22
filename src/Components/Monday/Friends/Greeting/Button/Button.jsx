import React from 'react';
import style from "./Button.module.css"

class Button extends React.Component {

    render = () => {
        return (
            <div className={style.button}>
                <button className={style[this.props.className]} onClick={this.props.func}>{this.props.name}</button>
            </div>
        );
    }
}

export default Button;

