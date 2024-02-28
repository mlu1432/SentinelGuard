import React from 'react';
import '../styles/components/SafetyTool.css';


const SafetyTools = ({ onEmergency, onShareLocation, onReportIncident }) => {
  return (
    <div className="safety-tools">
      <button onClick={onEmergency}>Emergency</button>
      <button onClick={onShareLocation}>Share Location</button>
      <button onClick={onReportIncident}>Report Incident</button>
      {/* Add more tools as needed */}
    </div>
  );
};


export default SafetyTools;