// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../../../data/Products';

const ProductList = () => {
  return (
    <div>
      {ProductsData.map(category => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <p>{category.title}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.Products.slice(0, 4).map(product => ( // Display only the first 4 products
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
          <Link to={`/category/${category.category}`}>
            <button>See More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
