require("dotenv").config({ path: "./config.env" });
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(helmet());

app.use(mongoSanitize());

app.use(xss());

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
