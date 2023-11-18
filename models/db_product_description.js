const Sequelize = require('sequelize');
const db_product = require('./db_product');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_product_description', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta_description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    meta_keyword: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_product_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "language_id" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
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
        name: "name_2",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "seo",
        using: "BTREE",
        fields: [
          { name: "seo" },
        ]
      },
    ]
  });
};
