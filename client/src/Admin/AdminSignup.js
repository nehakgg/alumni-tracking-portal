import React, { useState } from 'react';
import { Link} from 'react-router-dom';


const AdminSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
   
    
    fetch('http://localhost:5000/adminSignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
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
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <br/>
        <Link to="/AdminLogin"> 
        <pr>Click here to Login</pr>
        </Link> 
      </form>
    </div>
  );
};

export default AdminSignup;

