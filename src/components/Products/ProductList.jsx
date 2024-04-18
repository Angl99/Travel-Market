import React, { useState, useEffect } from 'react';
import { index } from "../../Helper/ProductHelper"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await index();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              {/* Add cells for other product details */}
              {/* Optionally add edit/delete buttons per product */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
