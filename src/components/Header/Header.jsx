import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ImgComp from "../imgComp";
import Logo from "../../assets/Logo.png";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/" aria-label="Home">
            <ImgComp src={Logo} alt="cein logo" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" aria-label="Home">Home</Link>
          <Link to="/products" aria-label="Products">Products</Link>
          <Link to="/testimonial" aria-label="Testimony">Testimony</Link>
        </nav>
        <div className="cart">
          <Link to="/cart" aria-label="Cart">
            <FiShoppingCart className="cart-icon" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
