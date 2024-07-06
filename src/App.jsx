import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import "./App.css";
import NoPage from "./pages/WildCard/NoPage.jsx";
import ProductDetails from "./components/ShopPage/Products/ProductDetails.jsx";
import ProductList from "./components/ShopPage/Products/ProductList.jsx";
import { CartProvider } from "./components/ShopPage/CartContext/CartContext.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            exact
            element={
              <CartProvider>
                <ProductList />
              </CartProvider>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <CartProvider>
                <ProductDetails />
              </CartProvider>
            }
          />
          <Route
            path="/checkout"
            element={
              <CartProvider>
                <CheckoutPage />
              </CartProvider>
            }
          />

          <Route
            path="/cart"
            element={
              <CartProvider>
                <CartPage />
              </CartProvider>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
