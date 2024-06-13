const Router = require("express");
const moviesController = require("../controllers/index.js");
const validarDatosMovie = require("../middlewares/middlewares.js");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getMovies);
moviesRouter.post("/", validarDatosMovie ,moviesController.createMovie);
moviesRouter.put("/:id", moviesController.updateMovie)
moviesRouter.delete("/:id", moviesController.deleteMovie)

module.exports = moviesRouter;
