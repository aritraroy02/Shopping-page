const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://aritradityaroy:Aritra@2002@mydatabase.pb3pfwc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a user schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNumber: Number,
  email: String,
  password: String,
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle user signup
app.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
