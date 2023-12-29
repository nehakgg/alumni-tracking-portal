import express from 'express';
import User from '../models/user.js';  // Import the User model

const router = express.Router();

router.post('/login', async (req, res) => {
  // Your login route handling code here

  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
      console.log("Successful login");
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

});

export default router;
