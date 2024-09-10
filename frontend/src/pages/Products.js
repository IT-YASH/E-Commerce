// src/pages/Products.js
import React, { useState } from 'react';
import './Products.css';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: '',
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
    setFilters(prevFilters => ({ ...prevFilters, priceRange: e.target.value }));
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
      price: 700,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x300?text=Product+3',
      name: 'Sweet 2',
      description: 'Tasty sweet treat.',
      rating: 5,
      category: 'Sweet',
      price: 1200,
    },
    // More products...
  ];

  const filteredProducts = products.filter(product => {
    // Filter by search term
    const inSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by price range
    const inPriceRange = 
      filters.priceRange === '' ||  // If no price range selected, include all
      (filters.priceRange === '0-500' && product.price <= 500) ||
      (filters.priceRange === '500-1000' && product.price > 500 && product.price <= 1000) ||
      (filters.priceRange === '1000+' && product.price > 1000);

    // Filter by rating
    const inRating = product.rating >= filters.rating;

    // Filter by category
    const inCategory = filters.categories.length === 0 || filters.categories.includes(product.category);

    return inSearchTerm && inPriceRange && inRating && inCategory;
  });

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
              <select onChange={handlePriceRangeChange} value={filters.priceRange}>
                <option value="">All</option>
                <option value="0-500">0 - 500</option>
                <option value="500-1000">500 - 1000</option>
                <option value="1000+">1000+</option>
              </select>
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
