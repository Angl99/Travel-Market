import React from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  return (
    
    <div className="vendor-dashboard">
        
      {/* <h1>Vendor Dashboard</h1> */}
      <ul>
        <li>
          <Link to="/create-product">Create New Product</Link>
        </li>
        {/* Add other dashboard functionalities here */}
        <li>Manage Products</li>
      </ul>
    </div>
  );
};

export default VendorDashboard;