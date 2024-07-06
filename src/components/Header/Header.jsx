import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>logo</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/checkout">New Arrivals</Link>
          <Link to="/checkout">Sales</Link>
          <Link to="/checkout">Journel</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
