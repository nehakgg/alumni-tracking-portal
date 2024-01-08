import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {

  const [user, setuser] = useState({
    email: "",
    password: "",
  });


  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3005/login", user);

      if (!response.data.code) {
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error("An error occurred during login");
    }
  };


  return (
    <div className="flex justify-center items-center h-screen shadow-lg">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
