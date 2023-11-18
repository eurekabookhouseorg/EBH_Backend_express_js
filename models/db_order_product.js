const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_product', {
    order_product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_prefix: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    diskon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    elib_borrowed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    elib_expired_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    elib_created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_order_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_product_id" },
        ]
      },
    ]
  });
};
