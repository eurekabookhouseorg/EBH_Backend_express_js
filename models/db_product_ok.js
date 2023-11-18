const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_product_ok', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    upc: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    ean: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    jan: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    id_author: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mpn: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "Indonesia"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stock_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    manufacturer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      defaultValue: 0
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    diskon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tax_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_available: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: false,
      defaultValue: 0.000
    },
    weight_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    length: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    width: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    height: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    length_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    subtract: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    minimum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    viewed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    storage_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    store_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_product_ok',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "model",
        using: "BTREE",
        fields: [
          { name: "model" },
        ]
      },
      {
        name: "sku",
        using: "BTREE",
        fields: [
          { name: "sku" },
        ]
      },
      {
        name: "quantity",
        using: "BTREE",
        fields: [
          { name: "quantity" },
        ]
      },
      {
        name: "stock_status_id",
        using: "BTREE",
        fields: [
          { name: "stock_status_id" },
        ]
      },
      {
        name: "manufacturer_id",
        using: "BTREE",
        fields: [
          { name: "manufacturer_id" },
        ]
      },
      {
        name: "price",
        using: "BTREE",
        fields: [
          { name: "price" },
        ]
      },
      {
        name: "weight",
        using: "BTREE",
        fields: [
          { name: "weight" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
    ]
  });
};
