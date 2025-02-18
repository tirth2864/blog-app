import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-50">
        <h2 className="font-bold flex justify-center mb-2 text-2xl">
          Register
        </h2>
        <input
          type="text"
          name="username"
          placeholder="something_unique"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="top#secret"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
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
