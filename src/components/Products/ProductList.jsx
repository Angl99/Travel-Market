import React, { useState, useEffect } from 'react';
import { index } from "../../Helper/ProductHelper"
import { Link } from 'react-router-dom'; // For update link


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await index();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleEditProduct = (productId) => {
    // Handle navigation to update product route
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            {/* Add headers for other product details */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              {/* Add cells for other product details */}
              <td>
                <Link to={`/update-product/${product.id}`}>Edit</Link> {/* Link to update route */}
                {/* <button onClick={() => handleDeleteProduct(product.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
