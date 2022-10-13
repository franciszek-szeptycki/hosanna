import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Nav from "./layout/Nav";

import Home from "./layout/Home";

function App() {
    return (
        <div className="app">
            <Nav />
            <Header />
            <main className="main">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
