const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_total', {
    order_total_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      defaultValue: 0
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_total',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_total_id" },
        ]
      },
      {
        name: "idx_orders_total_orders_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "value",
        using: "BTREE",
        fields: [
          { name: "value" },
        ]
      },
    ]
  });
};
