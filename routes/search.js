import express from 'express';
import User from '../models/user.js';  // Import the User model

const router = express.Router();

router.get('/search/:username', async (req, res) => {
  // Your search route handling code here

  const { username } = req.params;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (user) {
      res.status(200).json({

        username: user.username,
        roll: user.roll,
        email: user.email,    // Add email field
        branch: user.branch,
        graduationYear: user.graduationYear
        // Add other user details you want to send to the client
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
