const Router = require("express");
const moviesController = require("../controllers/index.js");
const validarDatosMovie = require("../middlewares/middlewares.js");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getMovies);
moviesRouter.post("/", validarDatosMovie ,moviesController.createMovie);

module.exports = moviesRouter;
