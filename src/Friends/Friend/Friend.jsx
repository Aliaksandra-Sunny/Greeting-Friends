import React from 'react';
import style from "./Friends.module.css"

class Friends extends React.Component {
    render=()=>{
        let friendsItems=this.props.state.friends.map((friend)=>{
            return(
                <Friend friend={friend}/>
            )
        });
        return(
            <div className={style.friends}>
                <h3>My friends:</h3>

            </div>
        )
    }
}

export default Friends;

