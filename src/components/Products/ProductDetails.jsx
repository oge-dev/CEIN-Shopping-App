
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import ProductsData from '../../data/products';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId parameter from URL
  const { cart, addToCart, removeFromCart } = useCart();
  const product = ProductsData.flatMap(category => category.Products).find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.oldPrice && <p>Old Price: ${product.oldPrice}</p>}
      {product.rate && <img src={product.rate} alt="Feedback" />}

      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
      <div>
      <Link to={'/cart'}>Go to Cart</Link>
      </div>
      
    </div>
  );
}

export default ProductDetails;
