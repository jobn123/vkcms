// routes/order.js

const order = require('../controllers/order.js')
const router = require('koa-router')()

router.prefix('/order')

router.get('/', order.getOrders)
router.get('/add', order.addOrder)

module.exports = router