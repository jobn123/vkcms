// routes/auth.js

const auth = require('../controllers/user.js')
const router = require('koa-router')()

router.prefix('/auth')

router.get('/admin/:name', auth.getUserInfo)

module.exports = router