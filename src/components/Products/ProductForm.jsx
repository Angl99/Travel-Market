import {create } from "../../Helper/ProductHelper"
import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await create.create(formData); 
      console.log('Product created successfully:', response);
      
      setFormData({ name: '', description: '', price: 0, image: '' }); 
    } catch (error) {
      console.error('Error creating product:', error);
      
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="product-form">
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.name} onChange={handleChange} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        {/* Add input fields for other product details */}
        <label htmlFor="image">Product Image (URL):</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

