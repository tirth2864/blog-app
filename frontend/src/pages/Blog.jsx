import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http:localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="conatiner mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title} </h1>
      <p className="text-gray-700 dark:text-gray-300">{blog.content}</p>
    </div>
  );
};

export default Blog;
