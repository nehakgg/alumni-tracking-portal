// import logo from './logo.svg';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';


// function App() {
//   return (
//     <>
//     <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
          
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
   
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import Home from "./Home";
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/AdminLogin';
import AdminSignup from './Admin/AdminSignup';
import Password from './Password';
import Search from './Search'; // Import your Search component
import cors from 'cors';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
     
   
      <BrowserRouter>
        
        <div>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/password" element={<Password />} />
        
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminSignup" element={<AdminSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
   

    </Routes>
         
     </div>    
    
    </BrowserRouter>
    
  );
}

export default App;
