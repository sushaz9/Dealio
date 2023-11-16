// BurgerMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-items">
        <Link to={`/`}>Home</Link>
        <Link to="favourites">Favourites</Link>
        <Link to="about">About</Link>
        <Link to="formpage">Add a discount</Link>
        <Link to="LoginButton">Log in</Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
