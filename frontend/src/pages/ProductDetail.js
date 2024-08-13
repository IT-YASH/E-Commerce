import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); // Assuming you'll pass the product ID through the URL

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Details of product with ID: {productId}</p>
      {/* Add more product detail components here */}
    </div>
  );
};

export default ProductDetail;
