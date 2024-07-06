import React from 'react';
import ProductList from '../../components/ShopPage/Products/ProductList';
import './ShopPage.css';

const ShopPage = () => {
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <ProductList />
    </div>
  );
};

export default ShopPage;
