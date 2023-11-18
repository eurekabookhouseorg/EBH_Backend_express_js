const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product_activation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code_activation: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perpustakaan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Apabila Data 0 = Kode Masih Tersedia"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table db_product"
    },
    bundling_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "1 voucher berisi beberapa judul produk"
    },
    elib_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_product"
    },
    id_variasi: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Detail Data Di elib_product_variation"
    },
    periode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Apabila Status 0 = Kode Masih Tersedia"
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Detail Eksemplar Di elib_product_variation"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Harga Di elib_product_variation"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elib_product_activation',
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
