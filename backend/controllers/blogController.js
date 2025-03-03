const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const newBlog = new Blog({
      title,
      content,
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      author: req.user.id, // This comes from authMiddleware
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username");
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    if (blog.author.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Unauthorized - You can't delete this blog." });
    }

    await blog.deleteOne();
    res.status(200).json({ message: "Blog deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBlog, getAllBlogs, deleteBlog };
