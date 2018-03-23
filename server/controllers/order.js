// controllers/user.js 

const order = require('../models/order.js')

async function getOrders(ctx, next) {
  console.log('--------------')
  // const name = ctx.params.name
  const result = await order.getOrders()
  ctx.body = result
}

async function addOrder(ctx, next) {
  console.log('--------------')
  // const name = ctx.params.name
  const result = await order.addOrder()
  ctx.body = result
}

module.exports = {
  getOrders,
  addOrder
}