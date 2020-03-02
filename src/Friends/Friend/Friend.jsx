import React from 'react';
import style from "./Friend.module.css"

class Friend extends React.Component {
    render=(props)=>{
        return(
            <div className={style.friend}>
                {this.props.friend}
            </div>
        )
    }
}

export default Friend;

