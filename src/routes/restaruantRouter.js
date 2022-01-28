const Router = require('express')
const router = new Router()
const restaruantController = require('../controllers/restaruantController')

router.post('/', restaruantController.create)
router.get('/', restaruantController.getAll)

module.exports = router