import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';


const MyNetworkIconComponent = () => {
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/mynetwork');
    };


    return (
        <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPeopleRoof} size="sm" style={{ color: "#74C0FC" }} />
            <label>My Network</label>
        </div>
    );
};


export default MyNetworkIconComponent;