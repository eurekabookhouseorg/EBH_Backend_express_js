const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_shipping', {
    order_shipping_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mall_id_rajong: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    berattotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    awb: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    shipping_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ongkoskirim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal_final: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_shipping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_shipping_id" },
        ]
      },
    ]
  });
};
