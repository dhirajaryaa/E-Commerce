import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CartContext from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
