const moviesServices = require("../services/index.js");

module.exports = {
  getMovies: async (req, res) => {
    try {
        const movies = await moviesServices.getAllMovies()
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send(error)
    }
  },
  createMovie: async(req, res) => {
    const {title, year, director, duration, genre, rate, poster, imgTitle, background, trailer, synopsis} = req.body
    try {
      const createMovie = await moviesServices.createMovie({title, year, director, duration, genre, rate, poster, imgTitle, background, trailer, synopsis})
      res.status(201).json(createMovie)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  deleteMovie: async (req, res) => {
    const {id} = req.params
    try {
      const deletedMovie = await moviesServices.deleteMovie(id)
      res.status(200).json(deletedMovie)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  updateMovie: async (req, res) => {
    const {id} = req.params
    const {title, year, director, duration, genre, rate, poster, imgTitle, background, trailer, synopsis} = req.body
    try {
      const updateMovie = await moviesServices.updateMovie(id, {title, year, director, duration, genre, rate, poster, imgTitle, background, trailer, synopsis})
      res.status(200).json(updateMovie)
    } catch (error) {
      res.status(500).send(error)
    }
  }
};
