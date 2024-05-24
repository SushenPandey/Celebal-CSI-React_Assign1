import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessComponent.css';

const SuccessComponent = () => {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  if (!formData) {
    return <div className="success-container"><h2>No data available</h2></div>;
  }

  return (
    <div className="success-container">
      <h2>Form Submitted Successfully</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default SuccessComponent;
