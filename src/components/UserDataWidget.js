import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../styles/components/UserDataWidget.css';

// Widget to display user data


const UserDataWidget = () => {
    const { user } = useContext(UserContext);


    return (
        <div className="user-data-widget">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            {/* Additional user information and actions */}
        </div>
    );
};


export default UserDataWidget;