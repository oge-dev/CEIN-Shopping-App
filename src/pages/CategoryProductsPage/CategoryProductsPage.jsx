// CategoryProductsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../../data/products";
import { Link } from "react-router-dom";
import "../../components/ShopPage/Products/ProductList.css"

const CategoryProductsPage = () => {
  const { category } = useParams(); // Get the category parameter from URL
  const categoryData = ProductsData.find((cat) => cat.category === category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="category">
      <h2>{categoryData.category}</h2>
      <p className="sub-title">{categoryData.title}</p>
      <div className="product-list">
        {categoryData.Products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="SampleImg"
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
    </div>
  );
};

export default CategoryProductsPage;
