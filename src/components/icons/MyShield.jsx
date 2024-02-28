import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingShield } from '@fortawesome/free-solid-svg-icons';

const MyShieldIconComponent = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/myshield');
    };

    return (
        <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faBuildingShield} size="sm" style={{ color: "#FFD43B" }} />
            <label>My Shield</label>
        </div>
    );
};

export default MyShieldIconComponent;