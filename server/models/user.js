// models/user.js
const db = require('../config/db.js'), 
      userModel = '../schema/user.js'

const Cms = db.Cms; // 引入数据库

const User = Cms.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

async function getUserByName(name) {
  const UserInfo = await User.findOne({
    where: {
      name: name
    }
  })
  return {
    status: 200,
    user: UserInfo
  }
}

module.exports = {
  getUserByName
}
