import React from 'react';
import style from "./Button.module.css"

class Button extends React.Component {

    render = () => {
        return (
            <div className={style.button}>
                <button onClick={this.props.sayHello}>Йоу</button>
            </div>
        );
    }
}

export default Button;

