import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/NavBar.css';

// Icon components
import MyNetworkIconComponent from './icons/MyNetworkIconComponent'
import MyChatIconComponent from './components/icons/MyChatIconComponent';
import LocationIconComponent from './components/icons/LocationIconComponent';
import SettingsIconComponent from './components/icons/SettingsIconComponent';
import MyShieldIconComponent from './components/icons/MyShieldIconComponent';

// NavBar component


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">SentinelGuard</div>
      <div className="nav-links">
        <Link to="/mynetwork"><MyNetworkIconComponent /></Link>
        <Link to="/mychat"><MyChatIconComponent /></Link>
        <Link to="/location"><LocationIconComponent /></Link>
        <Link to="/settings"><SettingsIconComponent /></Link>
        <Link to="/myshield"><MyShieldIconComponent /></Link>
        {/* Add or remove icons as necessary */}
      </div>
    </nav>
  );
};

export default NavBar;