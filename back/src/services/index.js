const axios = require("axios");
const Movie = require('../models/movieModels.js')

module.exports = {
  getAllMovies: async () => {
    try {
      const { data } = await axios.get("https://api.1rodemayo.com/movies");
      const dataProtected = data.map((movie) => new Movie(movie));
      return dataProtected;
    } catch (error) {
        return error;
    }
  },
};
