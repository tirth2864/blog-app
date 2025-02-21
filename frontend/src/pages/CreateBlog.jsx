import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);

      if (!token) {
        toast.error("Authentication required. Please log in.");
        navigate("/login");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/blogs",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      toast.success("Blog Created Successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error:", err?.response?.data || err.message);
      if (
        err.response?.status === 401 &&
        err.response?.data?.error === "Session expired. Please log in again."
      ) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }
      toast.error(err.response?.data?.error || "Failed to create blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl flex mb-4 justify-center font-bold dark:text-white">
        Create a new Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full py-2 px-4 dark:bg-gray-800 dark:text-white placeholder:dark:text-gray-500 bg-gray-300 rounded-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full py-2 px-4 dark:bg-gray-800 dark:text-white placeholder:dark:text-gray-500 bg-gray-300 rounded-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="tags (comma separated)"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full dark:bg-gray-800 dark:text-white placeholder:dark:text-gray-500  py-2 px-4 rounded-2xl bg-gray-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
          >
            publish blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
