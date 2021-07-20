const express = require('express')
const router = express()
const favoritesController  = require('../controllers/favoritesController')
const { authenticate, authorize} = require('../middleware/auth')

router.use(authenticate)
router.post('/resource/:id', favoritesController.createFavorites)
router.get('/resource', favoritesController.showFavorites)
router.delete('/resource/:id', favoritesController.deleteFavorite)

module.exports = router