const Router = require('express')
const moviesController = require('../controllers/index.js')


const router = Router()


router.get('/movies', moviesController.moviesController)


module.exports = router