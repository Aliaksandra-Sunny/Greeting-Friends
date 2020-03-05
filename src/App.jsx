import React from 'react';
import style from './App.module.css';
import Friends from "./Components/Friends/Friends";
import AboutMe from "./Components/AboutMe/AboutMe";

class App extends React.Component {

    render = () => {
        return (
            <div className={style.App}>
                <AboutMe/>
                <Friends/>
            </div>
        );
    }
}

export default App;
