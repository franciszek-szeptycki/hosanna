import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isScrollTop }) => {
    return (
        <nav className={`nav ${isScrollTop ? "nav-transparent" : ""}`}>
            <ul className="nav__ul">
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        strona główna
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        klub
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        podcast
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        wydawnictwo
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        youtube
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        facebook
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        protestantyzm
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
