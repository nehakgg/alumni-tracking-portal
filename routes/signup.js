import express from 'express';
import User from '../models/user.js';  // Import the User model

const router = express.Router();

router.post('/signup', async (req, res) => {
  // Your signup route handling code here

  const { username, password, roll, email, graduationYear, branch } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user and save it to the database
    const newUser = new User({
      username,
      password,
      roll,
      email,
      graduationYear,
      branch,
    });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }


});

export default router;
