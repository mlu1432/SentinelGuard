import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/components/MapView.css';

// Map container style
const containerStyle = {
  width: '400px',
  height: '400px'
};

// Assume predefinedMarkers are passed as props or managed here if static
const MapView = ({ apiKey, center, zoom, contacts }) => {
  // Your predefined markers or dynamic data
  const predefinedMarkers = [
      { id: 1, position: { lat: 51.505, lng: -0.09 }, info: 'Marker 1' },
      { id: 2, position: { lat: 51.51, lng: -0.1 }, info: 'Marker 2' },
  ];

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        {/* Markers for predefined locations */}
        {predefinedMarkers.map(marker => (
          <Marker key={marker.id} position={marker.position} />
        ))}
        {/* Markers for user and contacts */}
        {contacts && contacts.map(contact => (
          <Marker key={contact.id} position={contact.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapView);