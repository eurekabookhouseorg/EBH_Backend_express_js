const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oc_abcd', {
    city_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city_select: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oc_abcd',
    timestamps: false
  });
};
