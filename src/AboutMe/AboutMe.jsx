import React from 'react';
import style from "./AboutMe.module.css";
import Name from "./Name/Name";
import Skills from "./Skills/Skills";

class AboutMe extends React.Component {
    render = () => {
        return(
            <div className={style.aboutMe}>
                <p className={style.name}>Привет, меня зовут </p>
                <Name myName={this.props.aboutMe.myName}/>
                <p className={style.skills}>И вот 3 главные качества, которыми меня можно охарактеризовать:</p>
                <Skills mySkills={this.props.aboutMe.mySkills}/>
            </div>
        );
    }
}

export default AboutMe;

