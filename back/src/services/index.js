const MovieClass = require('../models/classMovie.js')
const Movie = require('../models/Movie.js')

module.exports = {
  getAllMovies: async () => {
      const data = await Movie.find().sort({title: 1})
      const dataProtected = data.map((movie) => new MovieClass(movie));
      return dataProtected;
  },
  createMovie: async (movieData) => {
      const newMovie = await Movie.create(movieData)
      return newMovie
  }
};
