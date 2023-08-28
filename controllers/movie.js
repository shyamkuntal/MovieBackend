const Movie = require("../models/movie");

module.exports.add = async (req, res, next) => {
  try {  
    const movie = new Movie(req.body);
    movie.save()
    const allMovie = await Movie.find();
    res.status(200).json(allMovie);
  } catch (err) {
    next(err);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const movie = await Movie.find();
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }  
};

module.exports.update = async (req, res, next) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    const movie = await Movie.find();
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteById = async (req, res, next) => {
  try { 
    await Movie.findByIdAndDelete(req.params.id);
    const movie = await Movie.find();
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

