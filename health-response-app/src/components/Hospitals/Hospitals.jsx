import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Assuming you want to fetch using latitude and longitude as query parameters
    const fetchHospitals = async () => {
      const latitude = -1.2921; // Replace with dynamic value or user input
      const longitude = 36.8219; // Replace with dynamic value or user input

      try {
        const response = await axios.get(`/api/hospitals/nearby?latitude=${latitude}&longitude=${longitude}`);
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <div>
      <h1>Nearby Hospitals</h1>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.place_id}>{hospital.name} - {hospital.vicinity}</li> // Update the keys as per the API response
        ))}
      </ul>
    </div>
  );
};

export default Hospitals;
