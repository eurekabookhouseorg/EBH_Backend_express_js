const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_customer_field', {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    custom_field_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    custom_field_value_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_customer_field',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "custom_field_id" },
          { name: "custom_field_value_id" },
        ]
      },
    ]
  });
};
