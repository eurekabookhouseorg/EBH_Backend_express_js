const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('myproject', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kode: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pengarang: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    harga: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    penerbit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tahun: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    kategori: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'myproject',
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
