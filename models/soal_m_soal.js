const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soal_m_soal', {
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
    id_materi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bobot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    tipe_file: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    soal: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gambar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    opsi_a: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    opsi_b: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    opsi_c: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    opsi_d: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    opsi_e: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    jawaban: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    tgl_input: {
      type: DataTypes.DATE,
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soal_m_soal',
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
