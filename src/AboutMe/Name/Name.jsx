import React from 'react';
import style from "./Name.module.css"

class Name extends React.Component {
    render = () => {
        return (
            <div className={style.myName}>
                    {this.props.myName}
            </div>
        );
    }
}

export default Name;

