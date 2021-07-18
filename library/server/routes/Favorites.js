const express = require('express')
const router = express()
const favoritesController  = require('../controllers/favoritesController')
const { authenticate } = require('../middleware/auth')

router.use(authenticate)
router.post('/resource/:id', favoritesController.createFavorites)

module.exports = router