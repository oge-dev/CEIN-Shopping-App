import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "../../data/products";
import "./ProductList.css";
import ArrowDown from "../../assets/Keyboard-arrow-down.png";
import { useCart } from '../../components/CartContext/CartContext';
import HeartIcon from "../../assets/heart-icon.png"; // Assuming you have icons for the actions
import CartIcon from "../../assets/cart-icon.png";
import InfoIcon from "../../assets/info-icon.png";

const ProductList = () => {
  const { addToCart, updateQuantity } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleQuantityChange = (id, amount) => {
    updateQuantity(id, amount);
  };

  return (
    <div>
      {ProductsData.map((category) => (
        <div key={category.category} className="category">
          <h2>{category.category}</h2>
          <p className="sub-title">{category.title}</p>
          <div className="product-list">
            {category.Products.slice(0, 4).map((product) => (
               <Link key={product.id} to={`/products/${product.id}`} className="product-card">
                <img
                  className="SampleImg"
                  src={product.image}
                  alt={product.name}
                />
                <div className="product-actions">
                  <img src={HeartIcon} alt="Favorite" className="action-icon" />
                  <img src={CartIcon} alt="Cart" className="action-icon" onClick={() => handleAddToCart(product)} />
                  <img src={InfoIcon} alt="Info" className="action-icon" />
                </div>
                <div className="section-Feedback">
                  <p>{product.section}</p>
                  <img src={product.rate} alt="Feedback" />
                </div>
                <h4>{product.name}</h4>
                <div className="Pricing">
                  <p>&#36;{product.price}</p>
                  <del>&#36;{product.oldPrice}</del>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                </div>
              </Link>
            ))}
          </div>
          <div className="btn-container">
            <Link to={`/category/${category.category}`} className="btn">
              <span>See More</span>
              <img src={ArrowDown} alt="Arrow-Down" className="ArrowDown" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
