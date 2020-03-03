import React from 'react';
import style from './App.module.css';
import Greeting from "./Greeting/Greeting";
import Friends from "./Friends/Friends";
import AboutMe from "./AboutMe/AboutMe";

class App extends React.Component {

    state = {
        aboutMe: {
            myName: "Belyavskaya Alexandra",
            mySkills: ["communicative", "optimistic", "infantile"],
        },
        friends: [],

    }

    addFriend = (newFriend) => {
        let newFriends = [...this.state.friends, newFriend]
        this.setState({
                friends: newFriends,
            }
        )
    }

    render = () => {
        return (
            <div className={style.App}>
                <AboutMe aboutMe={this.state.aboutMe}/>
                <div className={style.aboutYou}>
                    <Greeting addFriend={this.addFriend}/>
                    <Friends friends={this.state.friends}/>
                </div>
            </div>
        );
    }

}

export default App;
