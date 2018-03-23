//db.js

const Sequelize = require('sequelize')

const Cms = new Sequelize('mysql://root:@localhost/cms', {
  define: {
    timestamps: false
  }
})

module.exports = {
  Cms
}