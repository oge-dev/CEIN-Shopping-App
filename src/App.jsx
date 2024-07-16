import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import ProductList from "./components/Products/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import CategoryProductsPage from "./pages/ShopPage/CategoryProductsPage.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import "./App.css";
import NoPage from "./pages/WildCard/NoPage.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <CartProvider><LandingPage /></CartProvider>} />
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
            path="/category/:category"
            element={
              <CartProvider>
                <CategoryProductsPage />
              </CartProvider>
            }
          />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route
            path="/cart"
            element={
              <CartProvider>
                <CartPage />
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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
