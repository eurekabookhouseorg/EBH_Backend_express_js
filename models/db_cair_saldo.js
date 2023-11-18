const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_cair_saldo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rek_id_tujuan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rek_id_pengirim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_pengaju: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_permintaan: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tgl_mutasi: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_cair_saldo',
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
