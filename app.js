require("dotenv").config({ path: "./config.env" });
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const animeController = require(`${__dirname}/controllers/animeController`);
const globalErr = require(`${__dirname}/utils/errorMsg`);

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

app.use("*", function (req, res, next) {
  return next(new Error("This page does not exist."));
});

app.use(globalErr);

module.exports = app;
