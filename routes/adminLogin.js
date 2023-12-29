import express from 'express';
import Admin from '../models/admin.js';  // Import the Admin model

const router = express.Router();

router.post('/AdminLogin', async (req, res) => {
  // Your admin login route handling code here

  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const existingadmin = await admin.findOne({ username, password });
    if (existingadmin) {
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
