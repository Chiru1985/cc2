// EriComponent.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './EriComponent.css';

const EriComponent = () => {
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    // Add fade-in animation when component mounts
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        el.style.opacity = '1';
      }, index * 150);
    });
  }, []);

  const handleLogin = () => {
    // Navigate to Desktop2 page on button click
    navigate('/desktop2');
  };

  return (   
    <div className="login-container">
      <div className="login-content">
        <div className="eri-logo-container animate-on-load">
          <img 
            src="https://i.imgur.com/oYDRa6t.png" 
            alt="ERI Logo" 
            className="logo-image"
          />
        </div>
        
        <h1 className="eri-heading animate-on-load">ERI</h1>
        <h2 className="header-text animate-on-load">
          Emergency Room for Infants
        </h2>
        <p className="subheader-text animate-on-load">
          For the Age (0-4 Years)
        </p>
        <div className="login-button-container animate-on-load">
          <button className="login-button" onClick={handleLogin}>
            <img 
              src="https://i.ibb.co/xt1dqC65/Bank-ID-logo-white-1.png" 
              alt="BankID-Logo" 
              className="bankid-logo"
            />
            <span className="login-text">Log in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EriComponent;
