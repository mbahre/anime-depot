const mongoose = require("mongoose");

const animeShowSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  certificate: {
    type: String,
  },
  year: {
    type: String,
  },
  stars: {
    type: [String],
  },
  genre: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  summary: {
    type: String,
  },
  storyline: {
    type: String,
  },
});

const AnimeShow = new mongoose.model("AnimeShow", animeShowSchema);

module.exports = AnimeShow;
