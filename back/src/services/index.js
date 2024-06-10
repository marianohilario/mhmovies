const MovieClass = require('../models/classMovie.js')
const Movie = require('../models/Movie.js')

module.exports = {
  getAllMovies: async () => {
    try {
      const data = await Movie.find().sort({title: 1})
      console.log(data);
      const dataProtected = data.map((movie) => new MovieClass(movie));
      return dataProtected;
    } catch (error) {
        return error;
    }
  },
};
