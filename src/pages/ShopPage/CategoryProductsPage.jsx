import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../../data/products";
import { Link } from "react-router-dom";
import "../../components/Products/ProductList.css";
import "./CategoryProductsPage.css";
import { FaSearch } from "react-icons/fa";

const CategoryProductsPage = () => {
  const { category } = useParams(); // Get the category parameter from URL
  const categoryData = ProductsData.find((cat) => cat.category === category);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    categoryData?.Products || []
  );

  useEffect(() => {
    if (categoryData) {
      const filtered = categoryData.Products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.section.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, categoryData]);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="category">
      <div className="search">
        
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <FaSearch className="searchIcon" />
      </div>
         <h3>{categoryData.category}</h3>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card"
          >
            <img src={product.image} alt={product.name} className="SampleImg" />
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
