const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table db_product"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table db_author"
    },
    penerbit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Detail Data Dari Table elib_penerbit"
    },
    tahun_terbit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jumlah_halaman: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jenjang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_jenjang\t"
    },
    koleksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = Cetak, 2 = Elektroknik"
    },
    type_buku: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "1 = Teks, 2 = Non Teks"
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_category"
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_isi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "1 = Non-Fiksi, 2 = Fiksi"
    },
    cover: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_update: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'elib_product',
    timestamps: false,
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
