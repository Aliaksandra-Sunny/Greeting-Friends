import React from 'react';
import style from "./Name.module.css"

class Name extends React.Component {
    render = () => {
        return (
            <div className={style.aboutMe}>
                <p>Привет, меня зовут </p>
                <div className={style.name}>
                    {this.props.myName}
                </div>
            </div>
        );
    }
}

export default Name;

