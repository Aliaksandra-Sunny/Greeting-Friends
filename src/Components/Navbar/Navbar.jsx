import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to="/monday" activeClassName={style.active}>Monday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/tuesday" activeClassName={style.active}>Tuesday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/wednesday" activeClassName={style.active}>Wednesday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/thursday" activeClassName={style.active}>Thursday</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/friday" activeClassName={style.active}>Friday</NavLink>
                </div>
            </nav>
        )
    }

}

export default Navbar;