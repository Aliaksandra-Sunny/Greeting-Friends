import React from 'react';
import style from './App.module.css';
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Monday from "./Components/Monday/Monday";
import Tuesday from "./Components/Tuesday/Tuesday";
import Loading from "./Components/Loading/Loading";

class App extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(()=>{this.setState({loading: false})}, 3000)
    }

    render = () => {
        return (
            <HashRouter>
                    {this.state.loading? <Loading/>:
                            <div className={style.App}>
                            <Navbar/>
                            <Route path="/monday" render={() => <Monday/>}/>
                            <Route path="/tuesday" render={() => <Tuesday/>}/>
                        </div>
                    }
            </HashRouter>
        );
    }
}

export default App;
