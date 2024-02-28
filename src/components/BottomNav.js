import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/BottomNav.css';

// Icon components
import MyNetworkIconComponent from './icons/MyNetworkIconComponent'
import MyChatIconComponent from './components/icons/MyChatIconComponent';
import LocationIconComponent from './components/icons/LocationIconComponent';
import SettingsIconComponent from './components/icons/SettingsIconComponent';
import MyShieldIconComponent from './components/icons/MyShieldIconComponent';

// BottomNav component

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      {/* Replace existing links with custom icon components */}
      <MyNetworkIconComponent />
      <MyChatIconComponent />
      <LocationIconComponent />
      <SettingsIconComponent />
      <MyShieldIconComponent />


      {/* You can keep this if you want some of the original links to stay */}
      <Link to="/profile" className="bottom-nav-item">
        {/* FontAwesome icon for profile or replace with a custom component */}
        <span>Profile</span>
      </Link>
    </div>
  );
};


export default BottomNav;