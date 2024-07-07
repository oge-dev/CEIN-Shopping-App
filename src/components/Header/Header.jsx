import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import ImgComp from "../imgComp";
import Logo from "../../assets/Logo.png";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <ImgComp src={Logo} alt={"cein logo"} />
          </Link>
        </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/">Testimony</Link>
          </nav>
          <div>
            <Link to="/cart"><FiShoppingCart style={{ color: "var(--sky-blue)", fontSize: '20px' }} /></Link>
          </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
