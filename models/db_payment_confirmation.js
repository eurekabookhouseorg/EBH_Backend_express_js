const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_payment_confirmation', {
    id_confirmation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    invoice_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    no_order: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tgl_transfer: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    jumlah: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    bank: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    confirm_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_payment_confirmation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_confirmation" },
        ]
      },
    ]
  });
};
