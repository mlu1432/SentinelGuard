import React from 'react';
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';

// import paths for icon components
import LocationIconComponent from '../components/icons/LocationIconComponent';
import MyChatIconComponent from '../components/icons/MyChatIconComponent';
import MyNetworkIconComponent from '../components/icons/MyNetworkIconComponent';
import MyShieldIconComponent from '../components/icons/MyShieldIconComponent';
import SettingsIconComponent from '../components/icons/SettingsIconComponent';

// import for IconGrid.css
import '../styles/IconGrid.css'

const MainHomePage = () => {
  return (
    <div className="main-home-page">
      <NavBar />
      <div className="grid-container">
        <div className="icon-container">
          <MyNetworkIconComponent />
          <label>My Network</label>
        </div>
        <div className="icon-container">
          <MyChatIconComponent />
          <label>My Chat</label>
        </div>
        <div className="icon-container">
          <LocationIconComponent />
          <label>Location</label>
        </div>
        <div className="icon-container">
          <SettingsIconComponent />
          <label>Settings</label>
        </div>
        <div className="icon-container">
          <MyShieldIconComponent />
          <label>My Shield</label>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default MainHomePage;