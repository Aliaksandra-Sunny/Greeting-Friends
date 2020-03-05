import React from 'react';
import style from './Monday.module.css';
import Friends from "./Friends/Friends";
import AboutMe from "./AboutMe/AboutMe";


class Monday extends React.Component {

    render = () => {
        return (
            <div className={style.monday}>
                <AboutMe/>
                <Friends/>
            </div>
        );
    }
}

export default Monday;