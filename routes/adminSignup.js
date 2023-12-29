import express from 'express';
import Admin from '../models/admin.js';  // Import the Admin model

const router = express.Router();

router.post('/AdminSignup', async (req, res) => {
  // Your admin signup route handling code here

  const { username, password } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await admin.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user and save it to the database
    const newUser = new admin({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

});

export default router;
