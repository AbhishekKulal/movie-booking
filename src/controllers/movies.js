const Movie = require("../models/Movie");

exports.findMovies = async (req, res) => {
  const movies = await Movie.find();
  res.send({ data: movies });
};

exports.createMovies = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.send({ data: movie });
};

exports.searchMovies = async (req, res) => {
  const searchKey = req.params.id;
  const movie = await Movie.find({
    name: new RegExp(searchKey, `i`),
  }).exec();
  res.send({ data: movie });
};
