const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product_perpustakaan', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID Customer Perpustakaan, Detail Data Terdapat Di Table db_customer"
    },
    perpustakaan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_perpustakaan"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table db_product\t"
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Detail Data Terdapat Di Table elib_product_variation"
    },
    code_activation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    elib_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_product"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock_all: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deactivated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elib_product_perpustakaan',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
