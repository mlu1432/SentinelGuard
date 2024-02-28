import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const LocationIconComponent = () => {
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/location');
    };


    return (
        <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faLocationDot} size="sm" style={{ color: "#63E6BE" }} />
            <label>Location</label>
        </div>
    );
};


export default LocationIconComponent;