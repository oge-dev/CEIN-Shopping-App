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
          <Link to="/checkout">New Arrivals</Link>
          <Link to="/shop">Products</Link>
          <Link to="/checkout">Testimony</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
