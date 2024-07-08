import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "../../assets/Logo.png";
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
            <img src={Logo} alt="cein logo" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" aria-label="Home">
            Home
          </Link>
          <div className="dropdown">
            <span className="dropdown-toggle" onClick={toggleDropdown} aria-label="Products">
              Products
              {isDropdownOpen ? <FiChevronUp className="dropdown-arrow" /> : <FiChevronDown className="dropdown-arrow" />}
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/category/New%20Arrivals">New Arrivals</Link>
                <Link to="/category/Men's%20Collections">Men's Collections</Link>
                <Link to="/category/Women's%20Collections">Women's Collections</Link>
                <Link to="/category/Kids%20Collections">Kids' Collections</Link>
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
          {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
        </div>
      </header>
    </>
  );
};

export default Header;
