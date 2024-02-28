import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';


const SettingsIconComponent = () => {
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/settings');
    };


    return (
        <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faGear} size="sm" style={{ color: "#d44508" }} />
            <label>Settings</label>
        </div>
    );
};


export default SettingsIconComponent;