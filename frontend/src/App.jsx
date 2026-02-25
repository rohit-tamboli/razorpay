import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import productsData from "./components/data";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Products products={productsData} />
        <Terms/>
        <PrivacyPolicy/>
        <RefundPolicy/>
        <Contact/>

        <Routes>
          <Route path="/" element={<Products products={productsData} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
