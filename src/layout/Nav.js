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
                    <NavLink className="nav__a" to="/error">
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
                            <NavLink className="nav__a" id="wydawnictwo" to="/error">
                                wydawnictwo
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" id="artykuły" to="/error">
                                artykuły
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" id="podcast" to="/error">
                                podcast
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav__li">
                    <NavLink className="nav__a" to="/error">
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
                            <NavLink className="nav__a" to="/error">
                                spotkania klubu
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="/error">
                                kursy
                            </NavLink>
                        </li>
                        <li className="nav__submenu-li">
                            <NavLink className="nav__a" to="/error">
                                konstultacje biblijne
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav__li li-media">
                    <a
                        className="nav__a"
                        target="_blank"
                        href="https://www.youtube.com/c/j1213"
                        rel="noopener noreferrer"
                    >
                        <i className="yt-icon fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li className="nav__li li-media">
                    <a
                        className="nav__a"
                        target="_blank"
                        href="https://www.facebook.com/SBHosanna"
                        rel="noopener noreferrer"
                    >
                        <i className="fb-icon fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
