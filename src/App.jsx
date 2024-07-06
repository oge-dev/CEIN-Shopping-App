import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import ShopPage from './pages/ShopPage/ShopPage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';
import './App.css';
import NoPage from "./pages/WildCard/NoPage.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/pro:id" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
