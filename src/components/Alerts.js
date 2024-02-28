import React, { useState } from 'react';
import '../styles/components/Alerts.css';



/**
 * Renders a component that displays a list of alerts.
 * @returns {JSX.Element} The rendered Alerts component.
 */
const Alerts = () => {
  // Sample state for alerts
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'error', message: 'This is an error alert!' },
    { id: 2, type: 'warning', message: 'This is a warning!' },
    // ... other alerts
  ]);

  // Function to dismiss an alert
  const dismissAlert = (alertId) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
  };

  return (
    <div className="alerts-container">
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert ${alert.type}`}>
          {alert.message}
          <button onClick={() => dismissAlert(alert.id)}>Dismiss</button>
        </div>
      ))}
    </div>
  );
};

export default Alerts;