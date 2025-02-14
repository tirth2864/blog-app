const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, content, author, tags } = req.body;
  try {
    const blog = new Blog({ title, content, author, tags });
    await blog.save();
    res.status(201).json({ message: "Blog created Succesfully!", blog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username");
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;