import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initial state (hidden and slightly scaled down)
      animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      className="container mx-auto p-4"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }} // Initial state (slightly above and hidden)
        animate={{ y: 0, opacity: 1 }} // Animate to original position and full opacity
        transition={{ delay: 0.2, duration: 0.5 }} // Delay and duration for the title animation
        className="text-3xl font-bold mb-4"
      >
        {blog.title}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }} // Initial state (slightly below and hidden)
        animate={{ y: 0, opacity: 1 }} // Animate to original position and full opacity
        transition={{ delay: 0.4, duration: 0.5 }} // Delay and duration for the content animation
        className="text-gray-700 dark:text-gray-300"
      >
        {blog.content}
      </motion.p>
    </motion.div>
  );
};

export default Blog;