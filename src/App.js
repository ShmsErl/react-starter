import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar.jsx";
import Products from "../src/pages/products/Products.jsx";
import Homepage from "../src/pages/homepage/Homepage.jsx";

import "./App.css";
import ProductDetail from "./pages/products/productDetail/ProductDetail.jsx";
import Footer from "./components/footer/Footer.jsx";
import AddProduct from "./pages/products/addProduct/AddProduct.jsx";
import UpdateProduct from "./pages/products/updateProduct/UpdateProduct.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          <Route exact path="/addProduct" element={<AddProduct />}></Route>
          <Route exact path="/homePage" element={<Homepage/>}></Route>
          <Route exact path="*" element={<div>Not Found</div>}></Route>
        </Routes>
        <Footer /> {}
      </Router>
    </>
  );
};

export default App;
