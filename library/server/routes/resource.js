const express = require('express')
const router = express()
const resourceController = require('../controllers/resourceController')
const { authenticate, authorize } = require('../middleware/auth')
router.get('/', resourceController.getAll)
router.use(authenticate)
router.post('/', resourceController.createResource)

router.use('/:id', authorize)
router.get('/:id', resourceController.getOne)
router.delete('/:id', resourceController.deleteResource)
router.put('/:id', resourceController.editResource)
module.exports = router