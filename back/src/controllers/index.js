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
};
