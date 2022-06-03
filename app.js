require("dotenv").config({ path: "./config.env" });
const express = require("express");

const app = express();

app.get("/api/animeshows", function (req, res) {
  res
    .status(200)
    .json({ status: "success", message: "Request for all shows successfully" });
});

app.get("/api/animeshow", function (req, res) {
  res
    .status(200)
    .json({ status: "success", message: "Request for one show successfully" });
});

module.exports = app;
