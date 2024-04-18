import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { getById  } from "../../Helper/ProductHelper"

const ProductItem = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams(); 


    useEffect(() => {
        const fetchProduct = async () => {
          const fetchedProduct = await getById(productId);
          setProduct(fetchedProduct);
        }
    
        fetchProduct();
      }, [productId]);

  return (
    <div className="product-item">
      {/* <img src={product.image} alt={product.name} /> */}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">${product.price}</span>

    </div>
  );
};

export default ProductItem;