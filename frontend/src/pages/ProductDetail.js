import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); 

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Details of product with ID: {productId}</p>
    </div>
  );
};

export default ProductDetail;
