import React, { useState } from "react";
import UserLoginForm from "../Login/UserLoginForm";
import VendorLoginForm from "../Login/VendorLoginForm";

function LoginToggler() {
  const [isVendor, setIsVendor] = useState(false);

  const toggleAccountType = () => {
    setIsVendor(!isVendor);
  };

  return (
    <div className="p-5 items-center">
      <div className="flex items-center">
        <span className={`mr-2 ${!isVendor ? "text-white" : "text-gray-500"}`}>
          Personal
        </span>
        <div
          onClick={toggleAccountType}
          className={`w-14 h-8 bg-gray-300 rounded-full p-1 cursor-pointer`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow transform transition-all duration-300 ${
              isVendor ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
        <span
          className={`ml-2 ${isVendor ? "text-blue-500" : "text-gray-500"}`}
        >
          Vendor
        </span>
      </div>
      <div className="flex-grow">
        {isVendor ? <VendorLoginForm /> : <UserLoginForm />}
      </div>
    </div>
  );
}
//NEED TO BUILD FUNCTIONALITY TO ROUTE TO VENDOR DASHBOARD AFTER SIGNING IN TO VENDOR ACCOUNT

//ALSO NEED TO BUILD FUNCTIONALITY FOR USER ACCOUNT/USER PROFILE
export default LoginToggler;
