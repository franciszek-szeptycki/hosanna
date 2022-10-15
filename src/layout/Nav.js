import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isScrollTop }) => {
    const [burgerCLicked, setBurgerClicked] = useState(false);

    return (
        <nav
            className={`nav ${
                isScrollTop && !burgerCLicked ? "nav-transparent" : ""
            } ${burgerCLicked ? "expand-menu" : ""} `}
        >
            <div className="hamburger">
                <i
                    onClick={() => setBurgerClicked((prev) => !prev)}
                    className={
                        !burgerCLicked
                            ? "fa-solid fa-bars"
                            : "fa-solid fa-xmark"
                    }
                ></i>
            </div>
            <ul className="nav__ul">
                <li className="nav__li">
                    <NavLink className="nav__a" to="/">
                        strona główna
                    </NavLink>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="#">
                        biblia hosanna
                    </NavLink>
                </li>
                <li className="nav__li li-expand">
                    <NavLink className="nav__a" to="#">
                        poznaj biblię{" "}
                        <i className="nav__arrow-up fa-solid fa-chevron-down"></i>
                    </NavLink>
                    <ul className="nav__submenu">
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="#">
                                wydawnictwo
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="#">
                                artykuły
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="#">
                                podcast
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="#">
                        protestantyzm
                    </NavLink>
                </li>

                <li className="nav__li li-expand">
                    <NavLink className="nav__a" to="#">
                        klub{" "}
                        <i className="nav__arrow-up fa-solid fa-chevron-down"></i>
                    </NavLink>
                    <ul className="nav__submenu">
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
                        <i className="yt-icon fa-brands fa-youtube"></i>
                    </NavLink>
                </li>
                <li className="nav__li li-media">
                    <NavLink
                        className="nav__a"
                        target="_blank"
                        to="https://www.facebook.com/SBHosanna"
                    >
                        <i className="fb-icon fa-brands fa-facebook"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
