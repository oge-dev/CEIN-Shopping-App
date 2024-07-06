import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../../../data/Products'; // Adjust the path according to your file structure
import './ProductList.css'; // Import your CSS file for styling

const ProductList = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="product-list">
      {ProductsData.map((categoryData, index) => (
        <div key={index} className="category">
          <h2>{categoryData.category}</h2>
          {categoryData.title && <h3>{categoryData.title}</h3>}
          <div className="products">
            {categoryData.Products.slice(0, showAll ? categoryData.Products.length : 4).map(product => (
              <Link key={product.id} to={`/products/${product.id}`} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {product.oldPrice && <p>Old Price: ${product.oldPrice}</p>}
                {product.rate && <img src={product.rate} alt="Feedback" />}
              </Link>
            ))}
          </div>
          {!showAll && (
            <button onClick={toggleShowAll}>See More</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
