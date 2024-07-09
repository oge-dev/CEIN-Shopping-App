import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "../../../data/products";
import "./ProductList.css";
import ArrowDown from "../../../assets/Keyboard-arrow-down.png";

const ProductList = () => {
  return (
    <div>
      {ProductsData.map((category) => (
        <div key={category.category} className="category">
          <h2>{category.category}</h2>
          <p className="sub-title">{category.title}</p>
          <div className="product-list">
            {category.Products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card"
              >
                <img
                  className="SampleImg"
                  src={product.image}
                  alt={product.name}
                />
                <div className="section-Feedback">
                  <p>{product.section}</p>
                  <img src={product.rate} alt="Feedback" />
                </div>
                <h4>{product.name}</h4>
                <div className="Pricing">
                  <p>&#36;{product.price}</p>
                  <del>&#36;{product.oldPrice}</del>
                </div>
              </Link>
            ))}
          </div>
          <div className="btn-container">
          <button className="btn">
            <Link to={`/category/${category.category}`}>
              <span>See More</span>
              <img src={ArrowDown} alt="Arrow-Down" className="ArrowDown" />
            </Link>
          </button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ProductList;
