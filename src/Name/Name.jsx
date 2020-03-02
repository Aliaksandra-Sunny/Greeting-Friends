import React from 'react';
import style from "./Name.module.css"

class Name extends React.Component {
    render = () => {
        return (
            <div className={style.name}>
                Белявская Александра Сергеевна
            </div>
        );
    }
}

export default Name;

