import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faBell, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userLoggedIn = true; // Change this based on your authentication logic
  const userPhoto = "https://via.placeholder.com/40"; // Replace with actual user photo URL
  const userName = "Yash Patel"; // Replace with actual user name

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <h1 className="nav-logo">E-Commerce</h1>
          </div>
          <div className="hamburger" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </div>
          <ul className={`nav-links ${sidebarOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FontAwesomeIcon icon={faBox} /> Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/notifications" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FontAwesomeIcon icon={faBell} /> Notifications
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cart" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signin" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FontAwesomeIcon icon={faUser} /> Sign In
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signup" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FontAwesomeIcon icon={faUser} /> Sign Up
              </NavLink>
            </li>
            {userLoggedIn && (
              <div className="user-info">
                <img className="user-photo" src={userPhoto} alt="User" />
                <span className="user-name">{userName}</span>
              </div>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
