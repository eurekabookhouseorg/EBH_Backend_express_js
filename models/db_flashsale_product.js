const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_flashsale_product', {
    id_flashsale_product: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    laku_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_flashsale_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_flashsale_product" },
        ]
      },
    ]
  });
};
