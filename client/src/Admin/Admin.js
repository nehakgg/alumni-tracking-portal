

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
        <Link to="/AdminLogin">
            <button type="button">
            Login
        </button>
            </Link>

            <Link to="/AdminSignup">
            <button type="button">
            Signup
        </button>
            </Link>

    </div>
  );
};

export default Dashboard;