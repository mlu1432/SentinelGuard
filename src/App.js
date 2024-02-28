import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import UserProfile from '../components/UserProfile';

// Components
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';

// Pages
import MainHomePage from './pages/MainHomePage';
import LocationPage from './pages/LocationPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MyNetworkPage from './pages/MyNetworkPage';
import WelcomePage from './pages/WelcomePage';

// Styles
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <UserProfile />
          <NavBar />
          <Routes>
            <Route path="/" element={<MainHomePage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/network" element={<MyNetworkPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            {/* Add additional routes as needed */}
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
