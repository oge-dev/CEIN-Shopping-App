import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext/CartContext';
import './CheckoutPage.css'; // Import your CSS file for styling

const CheckoutPage = () => {
  const { cart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as sending order details to a server
    alert("Processing checkout...");
    // Optionally, clear cart after successful checkout
    // clearCart();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="cart-items">
        <h3>Cart Items:</h3>
        {cart.map(product => (
          <div key={product.id} className="cart-item">
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))}
        <p>Total Price: ${getTotalPrice()}</p>
      </div>
      <div className="shipping-info">
        <h3>Shipping Information:</h3>
        <form className="shipping-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="text" placeholder="Address" className="input-field" />
          <button type="submit" className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        </form>
      </div>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default CheckoutPage;
