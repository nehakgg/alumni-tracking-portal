import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AdminSignup = (props) => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  const navigate = useNavigate();

  // State variable to handle Error Messages

  const [errorChecking, seterrorChecking] = useState(false);
  const [success, setSuccess] = useState(false);

  const engineeringBranches = [
    "Computer Science Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electronics & Communication",
    "Electrical Engineering",
    "Msc Mathematics",
  ];

  //   Change Handle For Input Form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  //   Check for valid password

  const validPassword = (password) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const password = user.password; // Accessing user.password here

      if (!validPassword(password)) {
        // Password doesn't meet the criteria
        seterrorChecking(true);
        toast.error(
          "Password must be at least 6 characters long with one uppercase letter, one lowercase letter, and one digit."
        );
        return;
      }

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );

      if (!response.data.code) {
        setSuccess(true);
        toast.success("Signed Up Successfully!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        seterrorChecking(true);
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen shadow-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="mobileNo"
        >
          Mobile No.:
        </label>
        <input
          type="text"
          id="mobileNo"
          name="mobileNo"
          value={user.mobileNo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminSignup;
