// src/ChangePassword.js
import React, { useState } from 'react';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Add password change logic here

    const passwordData = {
      currentPassword,
      newPassword,
    };

    // Assume you have an API endpoint for changing the password
    fetch('http://localhost:5000/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You may need to include authentication headers if required
      },
      body: JSON.stringify(passwordData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server here
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form>
        <label>
          Current Password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />

        <button type="button" onClick={handleChangePassword}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
