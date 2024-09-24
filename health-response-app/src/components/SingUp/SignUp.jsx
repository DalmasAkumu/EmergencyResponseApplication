import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    medical_history: '' // Adding the medical history field
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/register', formData);
      alert('Registration successful! Redirecting to login...');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{
      backgroundColor: '#e0f7fa', // Light background color for contrast
      color: '#004d00', // Text color matching the theme
      fontFamily: 'Times New Roman, serif',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '50px auto',
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
          required 
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #004d00',
            borderRadius: '4px',
            fontSize: '16px'
          }} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #004d00',
            borderRadius: '4px',
            fontSize: '16px'
          }} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
          style={{
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #004d00',
            borderRadius: '4px',
            fontSize: '16px'
          }} 
        />
        {/* Medical History Textarea */}
        <textarea 
          name="medical_history" 
          placeholder="Medical History (optional)" 
          onChange={handleChange} 
          rows="4" 
          style={{
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #004d00',
            borderRadius: '4px',
            fontSize: '16px',
            resize: 'none'
          }} 
        />
        <button 
          type="submit" 
          style={{
            backgroundColor: '#0077cc', // Theme color for button
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#005f99'} // Darker on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0077cc'} // Original on mouse out
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
