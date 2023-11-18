const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_product_view', {
    id_product_view: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bulan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_product_view',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_product_view" },
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
        name: "view",
        using: "BTREE",
        fields: [
          { name: "view" },
        ]
      },
      {
        name: "tahun",
        using: "BTREE",
        fields: [
          { name: "tahun" },
        ]
      },
      {
        name: "bulan",
        using: "BTREE",
        fields: [
          { name: "bulan" },
        ]
      },
    ]
  });
};
