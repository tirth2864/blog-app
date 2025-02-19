import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      toast.success("Registration Successfull! Redirecting to Login...");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-50">
        <h2 className="font-bold flex justify-center mb-2 text-2xl dark:text-white">
          Register
        </h2>
        <input
          type="text"
          name="username"
          placeholder="something_unique"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4 dark:text-white dark:border-white dark:placeholder-white"
        />
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4 dark:text-white dark:border-white dark:placeholder-white"
        />
        <input
          type="password"
          name="password"
          placeholder="top#secret"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4 dark:text-white dark:border-white dark:placeholder-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Register;
