const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soal_paket_ujian_detil', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_paket_ujian: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_paket_group: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_soal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mapel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    no_soal: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soal_paket_ujian_detil',
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
