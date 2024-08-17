import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaBell, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
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
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${sidebarOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FaBox /> Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/notifications" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FaBell /> Notifications
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cart" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FaShoppingCart /> Cart
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signin" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FaUser /> Sign In
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signup" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <FaUser /> Sign Up
              </NavLink>
            </li>
          </ul>
            {userLoggedIn && (
              <div className="user-info">
                <img className="user-photo" src={userPhoto} alt="User" />
                <span className="user-name">{userName}</span>
              </div>
            )}
        </nav>
      </header>
    </>
  );
};

export default Header;
