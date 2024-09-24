const User = require('../models/User'); // Ensure the path to User model is correct
const bcrypt = require('bcrypt');

// User registration logic
const registerUser = async (req, res) => {
  const { name, email, password, medical_history } = req.body;

  // Input validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({ 
      name, 
      email, 
      password: hashedPassword, 
      medicalHistory: medical_history // Ensure this matches your model field
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'User registration failed' });
  }
};

module.exports = { registerUser };
