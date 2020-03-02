import React from 'react';
import Skill from "./Skill/Skill";
import style from "./Skills.module.css"

class Skills extends React.Component {
    render = () => {
        let skillsElements=this.props.mySkills.map((skill)=>{
            return(
                <Skill skill={skill}/>
            )
        });
        return (
            <div className={style.styleMap}>
                {skillsElements}
            </div>
        );
    }
}

export default Skills;

