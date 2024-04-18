import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/Login/Login";
import UserSignUp from "./components/SignUp/UserSignUp";
import VendorDashboard from "./components/VendorView/VendorDashboard";
import ProductForm from "./components/Products/ProductForm";
import ProductList from "./components/Products/ProductList"

// import './App.css'

function App() {
  return (
    <>
      <Router>
        
        <header className="homepage-header justify-between items-center p-5 ">
          {/* <Link to="/" className="homepage"> Home </Link> */}
          <div classname="">
            <Link to="/login" className="/signIn-text mr-5">
              Login
            </Link>
            <Link to="/userSignUp" className="/createAccount-text mr-5">
              Sign Up
            </Link>
            <Link to="/vendorDash" className="/vendorDashboard-text mr-5">
              Vendor Dashboard
            </Link>
            <Link to="/" className="/homepage">
              Home
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/userSignUp" element={<UserSignUp />} />
          {/* <Route path="/vendorSignUp" element = {<VendorSignUp/>} /> */}
          <Route path="/vendorDash" element={<VendorDashboard />} />
          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/manage-products" element={<ProductList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
