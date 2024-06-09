import React from "react";

import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Logement from "./pages/logement/Logement"
import "../src/assets/styles/main.scss";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />      
        <Route path="/logement/:id" element={<Logement/>} /> 
      </Routes>
    </HashRouter>
  );
};

export default App;