// CategoryProductsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../../data/Products";
import { Link } from "react-router-dom";

const CategoryProductsPage = () => {
  const { category } = useParams(); // Get the category parameter from URL
  const categoryData = ProductsData.find((cat) => cat.category === category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h2>{categoryData.category}</h2>
      <p>{categoryData.title}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {categoryData.Products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card"
          >
            <div
              key={product.id}
              style={{
                margin: "1em",
                border: "1px solid #ccc",
                padding: "1em",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100px", height: "100px" }}
              />
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
