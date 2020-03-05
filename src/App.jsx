import React from 'react';
import style from './App.module.css';
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Monday from "./Components/Monday/Monday";
import Tuesday from "./Components/Tuesday/Tuesday";

class App extends React.Component {

    render = () => {
        return (
            <HashRouter>
            <div className={style.App}>
                <Navbar/>
                <Route path="/monday" render={()=><Monday/>}/>
                <Route path="/tuesday" render={()=><Tuesday/>}/>
            </div>
            </HashRouter>
        );
    }
}

export default App;
