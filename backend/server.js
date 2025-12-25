const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check (DevOps)
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "moviexa-backend" });
});

// Movies API
app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-IN"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("TMDB error:", error.messagecurl http://127.0.0.1:3000/api/movies
