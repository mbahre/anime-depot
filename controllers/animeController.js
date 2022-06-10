exports.getAllAnimeShows = function (req, res) {
  res
    .status(200)
    .json({ status: "success", message: "Request for all shows successfully" });
};

exports.getAnimeShow = function (req, res) {
  res
    .status(200)
    .json({ status: "success", message: "Request for one show successfully" });
};
