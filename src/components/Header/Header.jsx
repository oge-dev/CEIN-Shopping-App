import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import ImgComp from "../imgComp";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <ImgComp src={Logo} alt={"cein logo"} />
          </Link>
        </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/">AboutUs</Link>
          </div>
          <div>
            <Link to="/testimonial">Testimony</Link>
            <Link to="/cart">Carts</Link>
          </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
