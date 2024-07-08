import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ImgComp from "../imgComp";
import Logo from "../../assets/Logo.png";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <Link to="/" aria-label="Home">
            Home
          </Link>
          <div className="dropdown">
            <span
              className="dropdown-toggle"
              onClick={toggleDropdown}
              aria-label="Products"
            >
              Products
              {isDropdownOpen ? (
                <FiChevronUp className="dropdown-arrow" />
              ) : (
                <FiChevronDown className="dropdown-arrow" />
              )}
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="">New Arrivals</Link>
                <Link to="">Men's Collections</Link>
                <Link to="">Women's Collections</Link>
                <Link to="">Kids' Collections</Link>
              </div>
            )}
          </div>
          <Link to="/testimonial" aria-label="Testimony">
            Testimony
          </Link>
        </nav>
        <div className="cart">
          <Link to="/cart" aria-label="Cart">
            <FiShoppingCart className="cart-icon" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX className="menu-icon" />
          ) : (
            <FiMenu className="menu-icon" />
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
