import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const MyChatIconComponent = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/mychat');
    };

    return (
        <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faComments} size="sm" style={{ color: "#B197FC" }} />
            <label>My Chat</label>
        </div>
    );
};

export default MyChatIconComponent;