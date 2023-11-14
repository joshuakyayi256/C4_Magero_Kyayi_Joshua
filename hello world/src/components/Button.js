import React from 'react';
import './Button.css'; // Import a CSS file for styling

const Button = ({ label }) => {
  return (
    <button className="custom-button">
      {label}
    </button>
  );
};

export default Button;

