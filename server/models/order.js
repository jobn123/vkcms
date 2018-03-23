// models/user.js
const db = require('../config/db.js'), 
      orderModel = '../schema/order.js'

const Cms = db.Cms; // 引入数据库

const Orders = Cms.import(orderModel); // 用sequelize的import方法引入表结构，实例化了User。

async function getOrders(name) {
  const orderInfo = await Orders.findAll({offset: 0, limit: 10})
  const length = await Orders.count()
  return {
    status: 200,
    total: length,
    orders: orderInfo
  }
}

async function addOrder(cname, cage, pname, tel, otime) {
  const status = 'fail'
  const orderInfo = await Orders.build({
    childName: 'sss',
    childAge: '12',
    parentName: 'ww',
    tel: '12345678'
  })
  .save()
  .then(anotherTask => {
    console.log('add order success')
    // status = 'success'
  })

  return {
    status: status
  }
}

module.exports = {
  getOrders,
  addOrder
}
