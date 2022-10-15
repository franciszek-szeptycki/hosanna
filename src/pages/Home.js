import React from "react";
import HomeUl from "./HomeUl";

import Pdf from "../assets/pdf/zasady-wiary.pdf";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="home article">
            <h1 className="article__title">szkoła biblijna ,,hosanna"</h1>
            <section className="section">
                <aside className="section__question-container">
                    <h2 className="section__question">dlaczego?</h2>
                </aside>
                <div className="section__content-container">
                    <p className="section__content">
                        Biblia była, jest i będzie niezawodnym przewodnikiem
                        życiowym dla milionów ludzi. Nie ulega wątpliwości, że
                        warto ją szczegółowo poznać. Problem polega na tym, że
                        została napisana tysiące lat temu i dzisiaj nie jest już
                        tak łatwa do zrozumienia. Dlatego Szkoła Biblijna
                        "Hosanna" przygotowała dla Ciebie mnóstwo narzędzi,
                        które pomogą Ci skutecznie wkroczyć w świat Pisma
                        Świętego i czerpać z niego pełnymi garściami.
                    </p>
                </div>
            </section>
            <section className="section">
                <aside className="section__question-container">
                    <h2 className="section__question">jak możemy pomóc?</h2>
                </aside>
                <div className="section__content-container">
                    <h3 className="section__li-title">
                        biblia ,,hosanna" <i className="fa-solid fa-book-bible"></i>
                    </h3>
                    <p className="section__content">
                        Nowoczesny przekład Szkoły Biblijnej. Jest on
                        maksymalnie wierny, napisany współczesnym językiem,
                        oparty na wiarygodnych rękopisach Nowego Testamentu, a
                        przede wszystkim opatrzony szczegółowym, a mimo to
                        łatwym do zrozumienia, komentarzem.{" "}
                    </p>
                    <NavLink className="bottom-link tiny-elem" to="/error">
                        Dowiedz się więcej...{" "}
                        <i className="link-icon fa-solid fa-arrow-right"></i>
                    </NavLink>
                    <HomeUl />
                </div>
            </section>
            <section className="section">
                <aside className="section__question-container">
                    <h2 className="section__question">o nas</h2>
                </aside>
                <div className="section__content-container">
                    <p className="section__content">
                        Szkoła jest prowadzona przez chrześcijan wiary
                        ewangelicznej, skupionych we Wspólnocie chrześcijan w
                        Rokitnie Szlacheckim, w województwie śląskim. Podmiotem,
                        który obsługuje szkołę od strony prawnej jest Fundacja
                        Szkoła Biblijna "Hosanna".
                    </p>
                    <div className="small-elem">
                        <h3>Wyznanie wiary</h3>
                        <p>
                            <a
                                className="a-pdf"
                                href={Pdf}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <button
                                    className="button-pdf"
                                    label="Resume"
                                >
                                    Wyznanie wiary PDF{" "}
                                    <i className="link-icon fa-solid fa-arrow-up-right-from-square"></i>
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <aside className="section__question-container">
                    <h2 className="section__question">kontakt</h2>
                </aside>
                <div className="section__content-container">
                    <p className="section__content">
                        Fundacja Szkoła Biblijna "Hosanna"
                        <br />
                        ul. Szlachecka 42
                        <br />
                        42-450 Rokitno Szlacheckie
                        <br />
                        <br />
                        e-mail: hosanna@j1213.org
                        <br />
                        telefon/SMS: (+48) 605 25 10 15
                        <br />
                        www: www.j1213.org
                        <br />
                        <br />
                        KRS: 0000409598
                        <br />
                        REGON: 242854252
                        <br />
                        NIP: 6492297083
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
