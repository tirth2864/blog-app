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

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      toast.error("Authentication required. Please log in.");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/blogs",
        {
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()),
          author: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Blog Created Successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to create blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl flex mb-4 justify-center font-bold dark:text-white">
        Create a new Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full py-2 px-4 mb-4 dark:bg-gray-800 dark:text-white"
          required
        />
        <textarea
          placeholder="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="w-full py-2 px-4 mb-4 dark:bg-gray-800 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="tags (comma separated)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className="w-full py-2 px-4 mb-4 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
