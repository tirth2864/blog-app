import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      toast.success("Login Succesfull! Redirecting to home...");
      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.error || "Login failed! Please try again."
      );
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="font-bold flex justify-center mb-2 text-2xl dark:text-white">
          Login
        </h2>
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded mb-5 dark:text-white dark:border-white dark:placeholder-white"
        />
        <input
          type="password"
          name="password"
          placeholder="top#secret"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 border rounded mb-5 dark:text-white dark:border-white dark:placeholder-white"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
