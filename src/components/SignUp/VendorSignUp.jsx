import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom';
import {create} from  "../../Helper/VendorHelper"



const VendorSignUp = () => {
    const [shopName, setShopName] = useState('');
    // const [localeId, setLocaleId] = useState(1);
    const localeId = 1;
    const userId = 3;
    // const [location, setLocation] = useState('');
    // const [marketProducts, setMarketProducts] = useState('');
    // const [hours, setHours] = useState('');
    // const [paymentTypes, setPaymentTypes] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    // const [formData, setFormData] = useState({

    // })
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
         await create({ 
         
            shopName,
            // location,
            // marketProducts,
            // hours,
            // paymentTypes,
            userId,
            localeId
        })
        console.log('Vendor created successfully:')
 
        alert('Vendor created successfully!')
        // navigate('/vendorDash'); // Redirect to vendor dashboard after signup
      } catch (error) {
        console.error('Error creating vendor:', error);
        setErrorMessage(error.message);
      }
    };
  
    return (
      <div className="vendor-signup">
        <h2>Vendor Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="shopName">Shop Name:</label>
          <input type="text" id="shopName" name="shopName" value={shopName} onChange={(e) => setShopName(e.target.value)} required />
          {/* <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          <label htmlFor="marketProducts">Market Products:</label>
          <textarea id="marketProducts" name="marketProducts" value={marketProducts} onChange={(e) => setMarketProducts(e.target.value)} required />
          <label htmlFor="hours">Hours of Operation:</label>
          <input type="text" id="hours" name="hours" value={hours} onChange={(e) => setHours(e.target.value)} required />
          <label htmlFor="paymentTypes">Payment Types Accepted:</label>
          <input type="text" id="paymentTypes" name="paymentTypes" value={paymentTypes} onChange={(e) => setPaymentTypes(e.target.value)} required /> */}
          <button type="submit">Sign Up as Vendor</button>
        </form>
      </div>
    );
}

export default VendorSignUp