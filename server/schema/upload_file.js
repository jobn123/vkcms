/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('upload_file', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hash: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'upload_file'
  });
};
