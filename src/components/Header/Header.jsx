import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import ImgComp from "../imgComp";
import Logo from "../../assets/Logo.png"

const Header = () => {
  return (
    <>
      <header>
        <div>
        <Link to="/">
        <ImgComp src={Logo} alt={'cein logo'} />
        </Link>
        </div>
        <nav>
          <Link to="/products">New Arrivals</Link>
          <Link to="/products">Products</Link>
          
          <Link to="/">Testimony</Link>
          <Link to="/cart">Carts</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
