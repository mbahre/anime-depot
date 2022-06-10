require("dotenv").config({ path: "./config.env" });
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const animeController = require(`${__dirname}/controllers/animeController`);

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: "Too many requests, Please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(helmet());

app.use(mongoSanitize());

app.use(xss());

app.get("/api/animeshows", animeController.getAllAnimeShows);

app.get("/api/animeshow", animeController.getAnimeShow);

module.exports = app;
