// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/ShopPage/CartContext/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} style={{ marginBottom: '1em' }}>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            </div>
          ))}
          <p>Total Price: ${getTotalPrice()}</p>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
