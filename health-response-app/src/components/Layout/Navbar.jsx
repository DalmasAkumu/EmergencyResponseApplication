import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarTitle}>
        <Link to="/" style={styles.titleLink}>Emergency App</Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/sos" style={styles.navLink}>SOS</Link></li>
        <li style={styles.navItem}><Link to="/first-aid" style={styles.navLink}>First Aid</Link></li>
        <li style={styles.navItem}><Link to="/hospitals" style={styles.navLink}>Hospitals</Link></li>
        <li style={styles.navItem}><Link to="/signup" style={styles.navLink}>Get Started</Link></li>
        <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#0077cc', // Blue background
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navbarTitle: {
    fontSize: '1.5rem',
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman, serif',
  },
  titleLink: {
    textDecoration: 'none',
    color: '#ffffff',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    fontSize: '1.2rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#ffffff',
    fontFamily: 'Times New Roman, serif',
    padding: '10px 15px', // Add padding for clickable area
    borderRadius: '5px', // Rounded corners for a button-like appearance
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transitions for hover effects
  },
  navLinkHover: {
    backgroundColor: '#005fa3', // Darker blue background on hover
    color: '#b3e0ff', // Lighter blue text on hover
  }
};

const NavLink = ({ children, to }) => (
  <Link 
    to={to} 
    style={styles.navLink} 
    onMouseEnter={(e) => { e.target.style.backgroundColor = styles.navLinkHover.backgroundColor; e.target.style.color = styles.navLinkHover.color; }}
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#ffffff'; }}
  >
    {children}
  </Link>
);

export default Navbar;
