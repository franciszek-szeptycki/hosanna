import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isScrollTop }) => {
    return (
        <nav className={`nav ${isScrollTop ? "nav-transparent" : ""}`}>
            <ul className="nav__ul">
                <li className={`nav__li ${isScrollTop ? "" : "li-white"}`}>
                    <NavLink className="nav__a" to="/">
                        strona główna
                    </NavLink>
                </li>
                <li className={`nav__li ${isScrollTop ? "" : "li-white"}`}>
                    <NavLink className="nav__a" to="#">
                        biblia hosanna
                    </NavLink>
                </li>
                <li className="nav__li li-expand">
                    <NavLink className="nav__a" to="#">
                        poznaj biblię{" "}
                        <i class="nav__arrow-up fa-solid fa-chevron-down"></i>
                    </NavLink>
                </li>
                <li className={`nav__li ${isScrollTop ? "" : "li-white"}`}>
                    <NavLink className="nav__a" to="#">
                        protestantyzm
                    </NavLink>
                </li>

                <li className="nav__li li-expand">
                    <NavLink className="nav__a" to="#">
                        klub{" "}
                        <i class="nav__arrow-up fa-solid fa-chevron-down"></i>
                    </NavLink>
                    <ul
                        className={`nav__submenu ${
                            isScrollTop ? "" : "li-white"
                        }`}
                    >
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="#">
                                spotkania klubu
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="#">
                                kursy
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="#">
                                konstultacje biblijne
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav__li li-media">
                    <NavLink
                        className="nav__a"
                        target="_blank"
                        to="https://www.youtube.com/c/j1213"
                    >
                        <i class="yt-icon fa-brands fa-youtube"></i>
                    </NavLink>
                </li>
                <li className="nav__li li-media">
                    <NavLink
                        className="nav__a"
                        target="_blank"
                        to="https://www.facebook.com/SBHosanna"
                    >
                        <i class="fb-icon fa-brands fa-facebook"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
