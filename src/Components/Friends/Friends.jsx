import React from 'react';
import style from "./Friends.module.css"
import Friend from "./Friend/Friend";
import Greeting from "./Greeting/Greeting";

class Friends extends React.Component {

    state = {
        friends: [],
    };
    
    addFriend = (newFriend) => {
        let newFriends = [...this.state.friends, newFriend]
        this.setState({
                friends: newFriends,
            }
        )
    };

    render = () => {
        let friendsItems = this.state.friends.map((friend, index) => {
            return (
                <Friend key={index} friend={friend}/>
            )
        });
        return (
            <div className={style.friends}>
                <Greeting addFriend={this.addFriend}/>
                <h3>My friends:</h3>
                {friendsItems}
            </div>
        )
    }
}

export default Friends;

