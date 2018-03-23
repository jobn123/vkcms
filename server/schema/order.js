/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    childName: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    childAge: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    parentName: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    tel: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    orderTime: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'order'
  });
};
