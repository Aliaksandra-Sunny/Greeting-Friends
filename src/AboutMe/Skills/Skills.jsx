import React from 'react';
import Skill from "./Skill/Skill";
import "./Skills.css"

class Skills extends React.Component {
    render = () => {
        debugger
        let skillsElements=this.props.mySkills.map((skill)=>{
            return(
                <Skill skill={skill}/>
            )
        });
        return (
            <div className="styleMap">
                {skillsElements}
            </div>
        );
    }
}

export default Skills;

