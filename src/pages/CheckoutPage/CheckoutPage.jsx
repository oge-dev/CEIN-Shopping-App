// CheckoutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext/CartContext';

const CheckoutPage = () => {
  const { cart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as sending order details to a server
    alert("Processing checkout...");
    // Optionally, clear cart after successful checkout
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Cart Items:</h3>
        {cart.map(product => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))}
        <p>Total Price: ${getTotalPrice()}</p>
      </div>
      <div>
        {/* Add form fields for shipping information */}
        <h3>Shipping Information:</h3>
        <form>
          {/* Example form fields */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Address" />
          <button type="submit" onClick={handleCheckout}>Proceed to Checkout</button>
        </form>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CheckoutPage;
