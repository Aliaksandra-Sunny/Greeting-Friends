import React from 'react';
import style from "./Friends.module.css"
import Friend from "./Friend/Friend";

class Friends extends React.Component {
    render = (props) => {
        let friendsItems = this.props.friends.map((friend) => {
            return (
                <Friend friend={friend}/>
            )
        });
        return (
            <div className={style.friends}>
                <h3>My friends:</h3>
                {friendsItems}
            </div>
        )
    }
}

export default Friends;

