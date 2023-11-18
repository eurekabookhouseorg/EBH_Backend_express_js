const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_funding', {
    id_funding: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    judul_funding: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    tagline_funding: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    konten_funding: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    target_funding: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slug_funding: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    id_pembuat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gambar_featured: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    jangka_waktu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_berakhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kota: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provinsi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kontak: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nama_pic: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    instansi: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_funding',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_funding" },
        ]
      },
    ]
  });
};
