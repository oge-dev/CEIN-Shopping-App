import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Timbu Cloud Shop</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </header>
  );
};

export default Header;
