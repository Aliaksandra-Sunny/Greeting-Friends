import React from 'react';

class Skill extends React.Component {
    render = () => {
        return(
                <div className="styleSkill">
                    <span>{this.props.feature}</span>
                </div>
        );
    }
}

export default Skill;

