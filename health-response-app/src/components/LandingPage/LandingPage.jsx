import React from 'react';

const LandingPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Your Lifeline in Emergencies</h1>
        <p style={styles.heroSubtitle}>
          Get immediate help, quick access to first aid, and connect to nearby medical facilities—all at the tap of a button.
        </p>
        <button style={styles.heroButton}>Download the App</button>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Critical Features Designed to Save Lives</h2>
        <div style={styles.featureContainer}>
          <div style={styles.featureCard}>
            <h3>SOS Button</h3>
            <p>Call for emergency help with one tap, connecting you to the nearest available emergency services.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>First Aid Guides</h3>
            <p>Step-by-step instructions to perform life-saving techniques, like CPR and wound care.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Nearby Medical Facilities</h3>
            <p>Locate the nearest hospitals and emergency rooms instantly, with directions and contact details.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Health History Record</h3>
            <p>Store and share your medical history for faster, informed treatment during emergencies.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.stepCard}>
            <h3>Step 1: Download & Register</h3>
            <p>Sign up with your email or phone number.</p>
          </div>
          <div style={styles.stepCard}>
            <h3>Step 2: Set Up Health Profile</h3>
            <p>Add your health information for use in emergencies.</p>
          </div>
          <div style={styles.stepCard}>
            <h3>Step 3: Use the SOS Button</h3>
            <p>Immediately connect with emergency services when needed.</p>
          </div>
          <div style={styles.stepCard}>
            <h3>Step 4: Access First Aid Guides</h3>
            <p>Use the guides to provide immediate help in emergencies.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Be Prepared—Download the Emergency Response App Today!</h2>
        <button style={styles.ctaButton}>Download Now</button>
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Times New Roman, serif',
    color: '#333',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically if needed
    minHeight: '100vh', // Ensure it takes at least full height of the viewport
  },
  heroSection: {
    backgroundColor: '#0077cc',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
    borderRadius: '10px',
    width: '100%', // Full width
    maxWidth: '800px', // Constrain width for larger screens
  },
  heroTitle: {
    fontSize: '3rem',
    margin: '0 0 20px',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  heroButton: {
    backgroundColor: '#005999',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  featuresSection: {
    margin: '50px 0',
    padding: '20px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '30px',
  },
  featureContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  featureCard: {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  howItWorksSection: {
    margin: '50px 0',
    padding: '20px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  stepsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  stepCard: {
    backgroundColor: '#e6f2ff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  ctaSection: {
    textAlign: 'center',
    backgroundColor: '#0077cc',
    color: '#fff',
    padding: '50px 20px',
    borderRadius: '10px',
    marginTop: '50px',
    width: '100%',
    maxWidth: '800px',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  ctaButton: {
    backgroundColor: '#005999',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
};

export default LandingPage;
