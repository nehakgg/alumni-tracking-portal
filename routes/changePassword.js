import express from 'express';
import User from '../models/user.js';  // Import the User model

const router = express.Router();

router.post('/change-password', async (req, res) => {
  // Your change password route handling code here

  const { username, currentPassword, newPassword } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username, password: currentPassword });
    
    if (user) {
      // Update the password
      user.password = newPassword;
      await user.save();

      return res.status(200).json({ message: 'Password changed successfully' });
    } else {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }

});

export default router;
