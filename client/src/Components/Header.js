import { LOGO_URL } from "../utils/constants";
import React from "react";
import { Link } from "react-router-dom";
import Body from "./Body";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-5 box-border sticky top-0 z-50 mt-3 ml-5 mr-5 rounded-lg border-blue-400">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="flex items-center">
          <img className="mr-2 rounded h-10" src={LOGO_URL} alt="Logo" />
          <Link to="" className="text-white text-2xl font-bold">
            Alumni Tracker
          </Link>
        </div>

        <div className="flex space-x-4 items-center box-border">
          <Link
            to="/notable-alumni"
            className="text-white text-md p-2 cursor-pointer hover:text-blue-500"
          >
            Notable Alumni
          </Link>
          <Link
            to="/about-us"
            className="text-white text-md cursor-pointer hover:text-blue-500"
          >
            About Us
          </Link>

          <Link
            to="/login"
            className="text-white text-md focus:outline-none hover:bg-blue-500 hover:text-white px-4 py-2 rounded"
          >
            Login
          </Link>

          <div>
            <Link
              to="/signup"
              className="text-white text-md focus:outline-none hover:bg-blue-500 hover:text-white px-4 py-2 rounded"
            >
              Signup
            </Link>
          </div>

          {/* Dropdown And Admin option */}
          <div className="relative group">
            <button className="text-white focus:outline-none">
              Admin
              <svg
                className="h-5 w-5 inline-block ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white  space-y-2  py-2 rounded">
              <Link
                to="/admin-login"
                className="block px-4 py-2 cursor-pointer  hover:bg-blue-500 hover:text-white rounded-sm"
              >
                Admin Login
              </Link>
              <Link
                to="/admin-signup"
                className="block px-4 py-2 cursor-pointer  hover:bg-blue-500 hover:text-white "
              >
                Admin Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;