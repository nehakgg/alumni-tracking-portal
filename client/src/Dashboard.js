// src/Welcome.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h2>Welcome To The Dashboard, {username}!</h2>
      <p>You are now logged... in!</p>
      <Link to="/Search"> 
        <pr>Click here not to Search Alumuni</pr>
        </Link>

        <Link to="/Password"> 
        <pr>Change Password</pr>
        </Link>
    </div>

  );
};

export default Dashboard;
