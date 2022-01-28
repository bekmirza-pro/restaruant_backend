const Router = require('express')
const router = new Router()
const foodRouter = require('./foodRouter')
const orderRouter = require('./orderRouter')
const userRouter = require('./userRouter')
const restaruantRouter = require('./restaruantRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/restaurant', restaruantRouter)
router.use('/food', foodRouter)
router.use('/order', orderRouter)


module.exports = router