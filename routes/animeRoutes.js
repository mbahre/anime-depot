const express = require("express");
const animeController = require(`${__dirname}/../controllers/animeController`);

const router = express.Router();

router.route("/animeshows").get(animeController.getAllAnimeShows);
router.route("/animeshow").get(animeController.getAnimeShow);

module.exports = router;
