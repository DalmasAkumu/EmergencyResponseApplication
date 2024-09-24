const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); 
const User = require('./models/User');           
const Hospital = require('./models/Hospital');   
const HealthHistory = require('./models/HealthHistory'); 
const userRoutes = require('./routes/user'); 
const hospitalRoutes = require('./routes/hospital'); 
const healthHistoryRoutes = require('./routes/healthHistory'); 

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Enable CORS

// Use Routes
app.use('/api/users', userRoutes); 
app.use('/api/hospitals', hospitalRoutes); 
app.use('/api/healthHistory', healthHistoryRoutes); 

// Define a simple route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World! The server is running!');
});

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred!' });
};

app.use(errorHandler); // Use error handler after all routes

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error creating database tables:', err);
  });
