import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/UserProfile.css';

// Component to display and update user profile data

const UserProfile = ({ initialUserData }) => {
  const [user, setUser] = useState(initialUserData || {});

  // Function to fetch user profile data
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/api/userprofile');
      setUser(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  // Fetch user data on component mount if userData is not provided
  useEffect(() => {
    if (!initialUserData) {
      fetchUserProfile();
    }
  }, [initialUserData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to update user profile
    try {
      const response = await axios.post('/api/userprofile', user);
      console.log('Profile Updated:', response.data);
      // You can also handle UI feedback here
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="user-profile">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email || ''}
          onChange={handleInputChange}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;