import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapView from '../components/MapView';
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';
import '../styles/LocationPage.css'; 

// LocationPage component

const LocationPage = () => {
  const [contacts, setContacts] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

  // Simulated fetching user's location for example
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setUserLocation({ lat: coords.latitude, lng: coords.longitude });
        },
        (error) => {
          console.error("Error fetching user location:", error);
          // Set a fallback location or handle the error appropriately
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      // Handle the lack of geolocation support
    }

    // Simulated fetch for contacts' locations
    const fetchContacts = async () => {
      // Simulate an API call to fetch contacts
      const simulatedContacts = [
        { id: 'contact1', name: 'Alice', location: { lat: 51.505, lng: -0.09 } },
        { id: 'contact2', name: 'Bob', location: { lat: 51.51, lng: -0.1 } },
      ];
      setContacts(simulatedContacts);
    };

    fetchContacts();
  }, []);

  // Access the API key from the .env file
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div className="location-page">
      <NavBar />
      <h1>Location Page</h1>
      {/* Ensure MapView is ready to receive apiKey as a prop */}
      {userLocation && (
        <MapView
          apiKey={googleMapsApiKey}
          center={userLocation}
          zoom={13}
          contacts={contacts}
        />
      )}
      <BottomNav />
    </div>
  );
};

export default LocationPage;