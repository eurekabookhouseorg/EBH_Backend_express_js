const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_promo', {
    id_promo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_promo_kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    judul_promo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    subjudul_promo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    minimum_pembelian: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    berlaku_di: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    berlaku_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    berlaku_sampai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    syarat_ketentuan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    klaim_bersyarat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_promo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_promo" },
        ]
      },
    ]
  });
};
