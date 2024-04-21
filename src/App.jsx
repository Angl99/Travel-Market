import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login/Login"
import UserSignUp from "./components/SignUp/UserSignUp";
import VendorDashboard from "./components/VendorView/VendorDashboard";
import ProductForm from "./components/Products/ProductForm";
import ProductList from "./components/Products/ProductList";
import UpdateProduct from './components/Products/UpdateProduct';
import ProductItem from "./components/Products/ProductItem";
import VendorSignUp from "./components/SignUp/VendorSignUp";
import Header from './components/Header.jsx';
import './App.css'

function App() {
  return (
    <div>

      <Router>
        <Header />
        <div> </div>
        <header>
          
          {/* <Link to="/" className="homepage"> Home </Link> */}
          <Link to="/login" />
          <br />
          <Link to="/userSignUp">
            {" "}
            Sign Up
          </Link>
          <br />
          <Link to="/vendorDash"> Vendor Dashboard</Link>
          
        </header>
        <h1>ThriveHive</h1>
        <div ></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userSignUp" element={<UserSignUp />} />
          <Route path="/vendorDash" element={<VendorDashboard/>} />
          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/manage-products" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/update-product/:productId" element={<UpdateProduct />} />
          <Route path="/product-details/:productId" element={<ProductItem />} />
          <Route path="/vendor-signup" element={<VendorSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
