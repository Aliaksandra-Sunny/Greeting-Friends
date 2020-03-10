import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {

    state = {
        isHidden: false,
    };

    onShowFiltersClick = () => {
        this.setState({
                isHidden: false,
            }
        )
    };

    onHideFiltersClick = () => {
        this.setState({
                isHidden: true,
            }
        )
    };


    render() {
        return (
            <nav className={style.nav}>
                {
                    !this.state.isHidden &&
                    <div>
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
                    </div>
                }
                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
            </nav>
        )
    }

}

export default Navbar;