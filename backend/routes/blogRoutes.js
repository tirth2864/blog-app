const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const { title, content, author, tags } = req.body;
  try {
    const blog = new Blog({
      title,
      content,
      author: req.user.id,
      tags: tags.split(",").map((tag) => tag.trim()),
    });
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

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "username");
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
