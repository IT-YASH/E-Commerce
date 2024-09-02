// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-rating">{'★'.repeat(product.rating)}</p>
        <div className="product-price-detail">
          <p className="product-price">${product.price}</p>
          <p className="product-detail">{product.description}</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
