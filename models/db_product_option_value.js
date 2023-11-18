const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_product_option_value', {
    product_option_value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_option_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    option_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    option_value_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtract: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false
    },
    price_prefix: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    points_prefix: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false
    },
    weight_prefix: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_product_option_value',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_option_value_id" },
        ]
      },
    ]
  });
};
