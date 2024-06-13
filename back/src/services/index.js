const MovieClass = require('../models/classMovie.js')
const Movie = require('../models/Movie.js');
const { set } = require('../routes/moviesRouter.js');

module.exports = {
  getAllMovies: async () => {
      const data = await Movie.find().sort({ title: 1 })
      const dataProtected = data.map((movie) => new MovieClass(movie));
      return dataProtected;
  },
  createMovie: async (movieData) => {
      const newMovie = await Movie.create(movieData)
      return newMovie
  },
  deleteMovie: async (id) => {
      const deletedMovie = await Movie.deleteOne({ _id: id })
      return deletedMovie
  },
  updateMovie: async (id, movieData) => {
    const updateMovie = await Movie.findByIdAndUpdate(id, movieData, {new:true})
    return updateMovie
  }
};
