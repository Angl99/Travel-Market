import React, { useState, useEffect } from 'react';
import { updateById, getById } from "../../Helper/ProductHelper"
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const { productId } = useParams(); 
  const navigate = useNavigate();
//   const [product, setProduct] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
  });

  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true); 
      setError(null); 

      try {
        const fetchedProduct = await getById(productId);
        // setProduct(fetchedProduct);
        setFormData(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error.message || 'Failed to fetch product.');
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateById(productId, formData); 
      console.log('Product updated successfully:', response);
      // Handle successful update (e.g., show confirmation message, redirect to product list)
      navigate('/manage-products'); // Redirect to product list after successful update
    } catch (error) {
      console.error('Error updating product:', error);
     
      setError(error.message || 'Failed to update product.');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="update-product">
      <h2>Update Product</h2>
      {isLoading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        
          <label htmlFor="image">Product Image (URL):</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          <button type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
};

export default UpdateProduct;
