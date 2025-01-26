import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./CartContext"; // Import the Cart Context
import Home from "./pages/Home";
import About from "./pages/about.jsx";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ShopingCart from "./pages/shopingCart.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <AppWithCart />
        </BrowserRouter>
        <Footer />
      </div>
    </CartProvider>
  );
}


function AppWithCart() {
  const { cartItems } = useCart(); 
  const cartCount = cartItems.length; 

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopingCart" element={<ShopingCart />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
