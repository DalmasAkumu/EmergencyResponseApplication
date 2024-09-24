import React from 'react';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: '005999', // Sky blue background color
      color: '#000000', // Black text color
      padding: '2rem', // Add padding for spacing
      textAlign: 'center', // Center text
      borderBottom: '2px solid #000000', // Black border for contrast
      fontFamily: 'Times New Roman, serif', // Set font to Times New Roman
    },
    h1: {
      fontSize: '2.5rem', // Adjust heading size
      margin: 0, // Remove default margin
    },
    p: {
      fontSize: '1.2rem', // Adjust paragraph size
      margin: '0.5rem 0 0', // Add top margin for spacing
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Welcome to RapidResponse</h1>
      <p style={styles.p}>Your reliable partner in emergency response.</p>
    </header>
  );
};

export default Header;
