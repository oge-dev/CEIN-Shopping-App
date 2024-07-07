import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext/CartContext';
import './CartPage.css'; // Import your CSS file for styles

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <p className="total-price">Total Price: ${getTotalPrice()}</p>
          <Link to="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
