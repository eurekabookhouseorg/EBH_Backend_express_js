const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_user_gift', {
    id_gift: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code_gift: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id = elib_product_activation"
    }
  }, {
    sequelize,
    tableName: 'elib_user_gift',
    timestamps: true
  });
};
