import React from "react";

const HomeUl = () => {
    return (
        <ul className="section__ul">
            <li className="section__li">
                <h3 className="section__li-title">
                    filmy{" "}
                    <a href="">
                        <i class="fa-solid fa-film"></i>
                    </a>
                </h3>
                <p className="section__content"></p>
                <button className="section__button">YoutTube</button>
            </li>
            <li className="section__li">
                <h3 className="section__li-title">
                    podcast{" "}
                    <a href="">
                        <i class="fa-solid fa-headphones-simple"></i>
                    </a>
                </h3>
                <p className="section__content"></p>
                <button className="section__button">
                    Posłuchaj biblijnego podcastu
                </button>
            </li>
            <li className="section__li">
                <h3 className="section__li-title">
                    artykuły{" "}
                    <a href="">
                        <i class="fa-solid fa-newspaper"></i>
                    </a>
                </h3>
                <p className="section__content"></p>
                <button className="section__button">Poznaj Pismo Święte</button>
            </li>
            <li className="section__li">
                <h3 className="section__li-title">
                    konsultacje{" "}
                    <a href="">
                    <i class="fa-solid fa-question"></i>
                    </a>
                </h3>
                <p className="section__content"></p>
                <button className="section__button">Zapytaj nas</button>
            </li>
        </ul>
    );
};

export default HomeUl;
