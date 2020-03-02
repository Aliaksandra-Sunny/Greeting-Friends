import React from 'react';
import style from "./Skill.module.css"

class Skill extends React.Component {
    render = () => {
        return(
                <div className={style.skillBox}>
                    <span>{this.props.skill}</span>
                </div>
        );
    }
}

export default Skill;

