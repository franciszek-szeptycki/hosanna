import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const HomeUl = () => {
    return (
        <ul className="ul-wrapped mid-elem">
            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    filmy <i className="fa-solid fa-film"></i>
                </h3>
                <a
                    target="_blank"
                    href="https://www.youtube.com/c/j1213"
                    rel="noopener noreferrer"
                >
                    <button className="section__button">YoutTube</button>
                </a>
            </li>

            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    podcast <i className="fa-solid fa-headphones-simple"></i>
                </h3>
                <Link to="/error">
                    <button className="section__button">
                        Posłuchaj biblijnego podcastu
                    </button>
                </Link>
            </li>

            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    artykuły <i className="fa-solid fa-newspaper"></i>
                </h3>
                <Link to="/error">
                    <button className="section__button">
                        Poznaj Pismo Święte
                    </button>
                </Link>
            </li>

            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    konsultacje biblijne{" "}
                    <i className="fa-solid fa-envelope"></i>
                </h3>
                <Link to="/error">
                    <button className="section__button">Zapytaj nas</button>
                </Link>
            </li>

            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    kursy <i className="fa-solid fa-chalkboard-user"></i>
                </h3>
                <Link to="/error">
                    <button className="section__button">Zapisz się</button>
                </Link>
            </li>
            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    spotkania klubu <i className="fa-solid fa-mug-saucer"></i>
                </h3>
                <Link to="/error">
                    <button className="section__button">Dołącz do nas</button>
                </Link>
            </li>
            <li className={`ul-wrapped__elem`}>
                <h3 className="ul-wrapped__elem-title">
                    wydawnictwo <i className="fa-solid fa-book"></i>
                </h3>
                <Link to="/error">
                    <button className="section__button">Obejrzyj ofertę</button>
                </Link>
            </li>
            <li className={`ul-wrapped__elem`}></li>
            <li className={`ul-wrapped__elem`}></li>
        </ul>
    );
};

export default HomeUl;
