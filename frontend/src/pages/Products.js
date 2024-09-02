// src/pages/Products.js
import React, { useState } from 'react';
import './Products.css';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    rating: 0,
    categories: []
  });

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    setFilters(prevFilters => ({ ...prevFilters, priceRange: value }));
  };

  const handleRatingChange = (e) => {
    setFilters(prevFilters => ({ ...prevFilters, rating: parseInt(e.target.value) }));
  };

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setFilters(prevFilters => {
      const categories = checked
        ? [...prevFilters.categories, id]
        : prevFilters.categories.filter(category => category !== id);
      return { ...prevFilters, categories };
    });
  };

  const applyFilters = () => {
    setFiltersVisible(false);
  };

  // Sample product data
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x300?text=Product+1',
      name: 'Sweet 1',
      description: 'Delicious traditional sweet.',
      rating: 4,
      category: 'Sweet',
      price: 150,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x300?text=Product+2',
      name: 'Farsan 1',
      description: 'Crispy and tasty farsan.',
      rating: 5,
      category: 'Farsan',
      price: 200,
    },
    // More products...
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.price >= filters.priceRange[0] &&
    product.price <= filters.priceRange[1] &&
    product.rating >= filters.rating &&
    (filters.categories.length === 0 || filters.categories.includes(product.category))
  );

  return (
    <div className="products-page">
      <div className="products-header">
        <button className="filter-button" onClick={toggleFilters}>
          <FaFilter /> Filters
        </button>
        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      
      <div className="products-content">
        {filtersVisible && (
          <div className="filters-sidebar">
            <h3>Filter Products</h3>
            <div className="filter-group">
              <label>Price Range:</label>
              <input 
                type="range" 
                min="0" 
                max="500" 
                step="1"
                onChange={handlePriceRangeChange}
                value={filters.priceRange.join(',')}
              />
              <div>Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</div>
            </div>
            <div className="filter-group">
              <label>Rating:</label>
              <select onChange={handleRatingChange} value={filters.rating}>
                <option value="0">Any Rating</option>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Category:</label>
              <div>
                <input type="checkbox" id="Sweet" onChange={handleCategoryChange} />
                <label htmlFor="Sweet">Sweet</label>
              </div>
              <div>
                <input type="checkbox" id="Farsan" onChange={handleCategoryChange} />
                <label htmlFor="Farsan">Farsan</label>
              </div>
            </div>
            <button className="apply-filters-button" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        )}
        
        <div className="products-list">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
