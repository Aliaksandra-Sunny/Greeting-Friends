import React from 'react';
import style from "./AboutMe.module.css";
import Name from "./Name/Name";
import Skills from "./Skills/Skills";

class AboutMe extends React.Component {

    state = {
        myName: "Belyavskaya Alexandra",
        mySkills: ["communicative", "optimistic", "infantile"],
    }

    render = () => {
        return (
            <div className={style.aboutMe}>
                <p className={style.name}>Привет, меня зовут </p>
                <Name myName={this.state.myName}/>
                <p className={style.skills}>И вот 3 главные качества, которыми меня можно охарактеризовать:</p>
                <Skills mySkills={this.state.mySkills}/>
            </div>
        );
    }
}

export default AboutMe;

