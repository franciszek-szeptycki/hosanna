import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Nav from "./layout/Nav";

import Home from "./layout/Home";

const App = () => {
    // T O    R E D U X
    const [isScrollTop, setIsScrollTop] = useState(true)
    window.addEventListener('scroll', () => {
        if (window.scrollY) setIsScrollTop(false)
        else setIsScrollTop(true)
    })
    
    return (
        <Router>
            <div className="app">
                <Nav isScrollTop={isScrollTop}/>
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
