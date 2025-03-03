const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err));

const authRoutes = require("./routes/authRoutes");   
const blogRoutes = require("./routes/blogRoutes");

app.use("/api/auth", authRoutes);   
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
