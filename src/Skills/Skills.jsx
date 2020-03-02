import React from 'react';
import Skill from "./Skill";
import "./Skills.css"

class Skills extends React.Component {
    render = () => {
        let skillsArr=["communicative", "optimistic", "infantile"]
        let skillsElements=skillsArr.map((item)=>{
            return(
                <Skill feature={item}/>
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

