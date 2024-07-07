import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../components/CartContext/CartContext";
import ProductsData from "../../data/products";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId parameter from URL
  const { cart, addToCart, removeFromCart } = useCart();
  const product = ProductsData.flatMap((category) => category.Products).find(
    (p) => p.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="Img-ProductDetails">
      <img src={product.image} alt={product.name} />
      <div className="ProductDetails">
        <h2>{product.name}</h2>
        <del>&#36;{product.oldPrice}</del>
        <p>&#36;{product.price}</p>
        <img src={product.rate} alt="Feedback" />
        <p>{product.description}</p>
        <div className="RemoveBtn-AddBtn">
          {isInCart ? (
            <button onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          )}
          <div>
            <Link to={"/cart"}>Go to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
