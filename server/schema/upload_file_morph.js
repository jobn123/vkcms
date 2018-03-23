/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('upload_file_morph', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    upload_file_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    related_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    related_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    field: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'upload_file_morph'
  });
};
