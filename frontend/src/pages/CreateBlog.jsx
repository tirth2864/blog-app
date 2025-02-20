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
      const response = await axios.post(
        "http://localhost:5000/api/blogs",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Blog Created Succesfully!");
      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.error || "Failed to create blog. Please try again."
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl flex justify-center font-bold mb-4 dark:text-white">
        Create a new Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full py-2 px-4 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-2xl dark:placeholder-gray-400"
            placeholder="title"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full py-2 px-4 rounded-2xl dark:text-white bg-gray-300 dark:bg-gray-800 dark:placeholder-gray-400"
            placeholder="content"
            rows="10"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full py-2 px-4 bg-gray-300 dark:text-white dark:bg-gray-800 dark:placeholder-gray-400 rounded-2xl"
            placeholder="tags (comma separated)"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-2xl mt-4"
            >
              Publish blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
