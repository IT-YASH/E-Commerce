import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faBell, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const userLoggedIn = true; 
  const userPhoto = "https://via.placeholder.com/40"; 

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <h1 className="nav-logo">E-Commerce</h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active">
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              <FontAwesomeIcon icon={faBox} /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" activeClassName="active">
              <FontAwesomeIcon icon={faBell} /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" activeClassName="active">
              <FontAwesomeIcon icon={faUser} /> Sign In
            </NavLink>
          </li>
        </ul>
        {userLoggedIn && (
          <div className="user-photo">
            <img src={userPhoto} alt="User" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
