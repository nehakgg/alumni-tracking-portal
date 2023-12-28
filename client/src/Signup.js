// src/Signup.js
import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [branch, setBranch] = useState('');

  const handleSignup = () => {
    // Add signup logic here
   
    const userData = {
      username,
      password,
      roll,
      email,
      graduationYear,
      branch,
    };

    
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
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
        <label>
          Roll:
          <input type="text" value={roll} onChange={(e) => setRoll(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Graduation Year:
          <input type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
        </label>
        <br />
        <label>
          Branch:
          <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} />
        </label>
        <br />
        
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <br/>
        <Link to="/Login"> 
        <pr>Click here to Login</pr>
        </Link> 
      </form>
    </div>
  );
};

export default Signup;

