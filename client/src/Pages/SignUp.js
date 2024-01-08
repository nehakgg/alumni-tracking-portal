import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const [user, setuser] = useState({
    name: "",
    rollNo: "",
    graduationYear: "",
    email: "",
    mobileNo: "",
    branch: "Msc Mathematics", // Default branch
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

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  // Password must be of 6 characters long having one Uppercase,LowerCase,one digit.
  const validPassword = (password) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const password = user.password; 

      if (!validPassword(password)) {
        //if  Password does not  meet the above criteria 
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
    <div className="flex justify-center items-center h-screen mt-5">
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
          htmlFor="rollNo"
        >
          Roll No.:
        </label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={user.rollNo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="graduationYear"
        >
          Year of Graduation:
        </label>
        <input
          type="text"
          id="graduationYear"
          name="graduationYear"
          value={user.graduationYear}
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
          htmlFor="branch"
        >
          Branch:
        </label>
        <select
          id="branch"
          name="branch"
          value={user.branch}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          {engineeringBranches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

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

export default SignupForm;
