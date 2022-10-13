import React from "react";
import { NavLink } from "react-router-dom";
// import { Router } from "react-router";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                {/* <Router> */}
                <li className="nav-li"></li>
                <li className="nav-li"><NavLink to="/">strona główna</NavLink></li>
                <li className="nav-li"><NavLink to="/">klub</NavLink></li>
                <li className="nav-li"><NavLink to="/">podcast</NavLink></li>
                <li className="nav-li"><NavLink to="/">wydawnictwo</NavLink></li>
                <li className="nav-li"><NavLink to="/">youtube</NavLink></li>
                <li className="nav-li"><NavLink to="/">facebook</NavLink></li>
                <li className="nav-li"><NavLink to="/">protestantyzm</NavLink></li>
                {/* </Router> */}
            </ul>
        </nav>
    );
};

export default Nav;
