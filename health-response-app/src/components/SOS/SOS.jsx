import React from 'react';
import axios from 'axios';

const SOS = () => {
  const handleEmergency = () => {
    axios.post('/api/emergency')
      .then(response => {
        alert('Emergency services notified!');
      })
      .catch(error => {
        console.error('Error notifying emergency services:', error);
        alert('Failed to notify emergency services.');
      });
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full height for centering
    backgroundColor: '#f0f8ff', // Light blue background for calmness
    color: '#004080', // Dark blue text
    fontFamily: 'Times New Roman, Times, serif' // Change font to Times New Roman
  };

  const buttonStyle = {
    backgroundColor: '#ff4d4d', // Bright red for visibility
    color: 'white', // White text
    border: 'none', // No border
    borderRadius: '10px', // Rounded corners
    padding: '30px 60px', // Increased padding for larger button
    fontSize: '28px', // Increased font size for emphasis
    cursor: 'pointer', // Pointer cursor on hover
    transition: 'background-color 0.3s ease', // Transition effect
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' // Shadow for depth
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#ff1a1a' // Darker red on hover
  };

  return (
    <div style={containerStyle}>
      <h1>Emergency SOS</h1>
      <p>If you are in distress, press the button below to alert emergency services.</p>
      <button 
        style={buttonStyle} 
        onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        onClick={handleEmergency}
      >
        Panic Button
      </button>
    </div>
  );
};

export default SOS;
