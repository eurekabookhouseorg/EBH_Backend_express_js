const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soal_paket_ujian', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mapel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_materi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_ujian: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    jumlah_soal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    waktu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    periode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    periode_awal: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    periode_akhir: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    periode_awal_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    periode_akhir_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    kkm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jenis: {
      type: DataTypes.ENUM('acak','set'),
      allowNull: false
    },
    detil_jenis: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATE,
      allowNull: false
    },
    terlambat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_paket_group: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soal_paket_ujian',
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
