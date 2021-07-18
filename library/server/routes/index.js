const express = require('express')
const router = express()
const userRoute = require('./user')
const resourceRoute = require('./resource')
const favoriteRoute = require('./Favorites')
router.use('/users', userRoute)
router.use('/resources', resourceRoute)
router.use('/favorites', favoriteRoute)

module.exports = router