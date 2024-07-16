import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext/CartContext';
import './CartPage.css'; // Import your CSS file for styles

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const getTotalPrice = () => {
    return (cart.reduce((total, product) => total + product.price * product.quantity, 0) * (1 - discount)).toFixed(2);
  };

  const handleApplyPromoCode = () => {
    if (promoCode === 'SAVE10') {
      setDiscount(0.1);
    } else {
      alert('Invalid promo code');
    }
  };

  const handleQuantityChange = (id, amount) => {
    updateQuantity(id, amount);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map(product => (
              <div key={product.id} className="cart-item">
                <input type="checkbox" />
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p>
                    <span style={{ textDecoration: 'line-through', color: 'red' }}>
                      ${(product.price * 1.2).toFixed(2)}
                    </span>{' '}
                    <span style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</span>
                    <span style={{ marginLeft: '10px', color: 'orange' }}>Disc 50%</span>
                  </p>
                  <div className="product-quantity">
                    <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div>
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyPromoCode}>Apply</button>
            </div>
            <p>Item(s): {cart.reduce((total, product) => total + product.quantity, 0)}</p>
            <p>Subtotal: ${(cart.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(2)}</p>
            <p>Promo: ${(cart.reduce((total, product) => total + product.price * product.quantity, 0) * discount).toFixed(2)}</p>
            <p className="total-price">Total: ${getTotalPrice()}</p>
            <Link to="/checkout">
              <button className="checkout-button">Check out</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
