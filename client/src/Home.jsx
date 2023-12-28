import React from 'react';
import Signup from "./Signup";
import Admin from './Admin/Admin';
import { Link, useNavigate} from 'react-router-dom';

const Home = () => {
  
    return (
      <>
        <div className="book">
            <Signup/>
            <Link to="/Admin">
            <button type="button">
            Admin
        </button>
            </Link>

        </div>
      </>
    );
  };
  
  export default Home;
  