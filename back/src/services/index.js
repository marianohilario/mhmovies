const { now } = require('mongoose');
const MovieClass = require('../models/classMovie.js')
const Movie = require('../models/Movie.js')

module.exports = {
  getAllMovies: async () => {
    try {
      const data = await Movie.find()
      console.log(now(),data);
      const dataProtected = data.map((movie) => new MovieClass(movie));
      return dataProtected;
    } catch (error) {
        return error;
    }
  },
};
