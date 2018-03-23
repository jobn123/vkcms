// controllers/user.js 

const user = require('../models/user.js')

async function getUserInfo(ctx, next) {
  console.log('--------------')
  const name = ctx.params.name
  const result = await user.getUserByName(name)
  ctx.body = result
}

module.exports = {
  getUserInfo
}