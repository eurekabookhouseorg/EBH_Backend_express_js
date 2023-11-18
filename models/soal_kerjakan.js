const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soal_kerjakan', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_tes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_paket_ujian: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    list_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    list_soal: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    list_jawaban: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    jml_benar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jml_salah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nilai: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    kkm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nilai_bobot: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    tgl_akhir: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    tgl_akhir_countdown: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    tgl_selesai: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    no_soal_aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soal_kerjakan',
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
