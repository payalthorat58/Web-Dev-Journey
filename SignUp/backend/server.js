const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes (IMPORT FIRST)
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch((err) => console.log("Mongo Error:", err));

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});