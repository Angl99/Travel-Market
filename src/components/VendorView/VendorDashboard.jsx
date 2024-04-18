import React from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  return (
    
    <div className="vendor-dashboard">
        <Link to="/" className="homepage">
      Home
    </Link>
      {/* <h1>Vendor Dashboard</h1> */}
      <ul>
        <li>
          <Link to="/create-product">Create New Product</Link>
        </li>
        {/* Add other dashboard functionalities here */}
        <li>
        <Link to="/manage-products"> Manage Products </Link>
          </li>
      </ul>
    </div>
  );
};

export default VendorDashboard;