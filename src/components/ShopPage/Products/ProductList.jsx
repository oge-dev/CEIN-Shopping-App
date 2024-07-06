import React from 'react';
import './ProductList.css'; 
import ProductsData from '../../../data/Products'; 
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="products-list">
      {ProductsData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="product-category">
          <h2>{category.category}</h2>
          {category.title && <h3>{category.title}</h3>}
          <div className="products">
            {category.Products.map((product, productIndex) => (
              <div key={productIndex} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {product.oldPrice && <p>Old Price: ${product.oldPrice}</p>}
                {product.rate && <img src={product.rate} alt="Rating" />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
