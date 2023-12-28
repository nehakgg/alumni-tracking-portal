// src/Login.js
import React, { useState } from 'react';

import { Link, useNavigate} from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate  = useNavigate();
  
  const handleLogin = () => {
    // Add login logic here
   
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server here
      

      if (data.message === 'Login successful') {
        // Redirect to a different page (replace '/dashboard' with your most desired route)
        console.log("we are  moving");
        navigate('/Dashboard', { state: { username } });
       
      

      }

      else {
        // Handle unsuccessful login, show an error message, etc.
        console.log('Login failed');
      }

    }) 
        

      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        
        <br/>
        <Link to="/Signup"> 
        <pr>Click here to Signup</pr>
        </Link> 

      </form>
    </div>
  );
};

export default Login;
