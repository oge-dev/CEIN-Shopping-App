import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../components/CartContext/CartContext";
import ProductsData from "../../data/products";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./ProductDetails.css"; // Import CSS file for styling

const ProductDetails = () => {
  const { productId } = useParams();
  const { cart, addToCart, removeFromCart } = useCart();
  const product = ProductsData.flatMap((category) => category.Products).find(
    (p) => p.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  const productCategory = ProductsData.find((category) =>
    category.Products.some((p) => p.id === parseInt(productId))
  ).category;

  return (
    <div className="product-details-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-separator">
            <FaChevronRight />
          </li>
          <li className="breadcrumb-item">
            <Link to={`/category/${productCategory.toLowerCase()}`}>
              {productCategory} Collection
            </Link>
          </li>
          <li className="breadcrumb-separator">
            <FaChevronRight />
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
      <div className="product-details">
          <img src={product.image} alt={product.name} />
   
        <div className="product-info">
          <div className="discount-badge">Disc 50%</div>
          <h2>{product.name}</h2>
          <div className="price-section">
            <del>&#36;{product.oldPrice}</del>
            <p>&#36;{product.price}</p>
          </div>

          <div className="size-selection">
            <label>Select a size</label>
            <div className="sizes">
              {["38", "39", "40", "41", "42", "43"].map((size) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="cart-buttons">
            {isInCart ? (        
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-btn"
              >
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => addToCart(product)} className="add-btn">
                Add to Cart
              </button>
            )}
            <Link to="/cart" className="buy-now-btn">
              Buy now
            </Link>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <button className="details-btn">Details</button>
        <button className="reviews-btn">Review</button>
        <button className="similar-products-btn">Similar products</button>
      </div>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
