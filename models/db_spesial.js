const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_spesial', {
    id_spesial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama_tema: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bg_header: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    bg_session: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ava_bawah: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_dibuat: {
      type: DataTypes.DATE,
      allowNull: false
    },
    aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_spesial',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_spesial" },
        ]
      },
    ]
  });
};
