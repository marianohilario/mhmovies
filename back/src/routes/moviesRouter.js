const Router = require("express");
const moviesController = require("../controllers/index.js");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getMovies);

module.exports = moviesRouter;
