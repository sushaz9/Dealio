// import { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
import Home from "./pages/Home";
// import Favourites from "./pages/Favourites";
// import Result from "./pages/Result";
// import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/result/ :id" element={<Result />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/form" element={<Form />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
