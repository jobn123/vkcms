/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_store', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    environment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'core_store',
        key: 'id'
      }
    }
  }, {
    tableName: 'core_store'
  });
};
