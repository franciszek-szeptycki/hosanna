import React from "react";
const Home = () => {
    return (
        <div className="home article">
            <h1 className="article__title">szkoła biblijna ,,hosanna"</h1>
            <section className="section">
                <aside className="section__question-container">
                    <h2 className="section__question">o biblii</h2>
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
                    <ul className="section__ul">
                        <li>
                            <h3 className="section__li-title">
                                biblia ,,hosannna"
                            </h3>
                            <p className="section__content">
                                Nowoczesny przekład Szkoły Biblijnej. Jest on
                                maksymalnie wierny, napisany współczesnym
                                językiem, oparty na wiarygodnych rękopisach
                                Nowego Testamentu, a przede wszystkim opatrzony
                                szczegółowym, a mimo to łatwym do zrozumienia,
                                komentarzem.
                            </p>
                        </li>
                        <li>
                            <h3 className="section__li-title">filmy</h3>
                            <p className="section__content"></p>
                        </li>
                        <li>
                            <h3 className="section__li-title">podcast</h3>
                            <p className="section__content"></p>
                        </li>
                        <li>
                            <h3 className="section__li-title">artykuły</h3>
                            <p className="section__content"></p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
