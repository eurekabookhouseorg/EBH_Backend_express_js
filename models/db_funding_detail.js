const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_funding_detail', {
    id_funding_detail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_funding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_pendonasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    komentar: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    tgl_donasi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bayar_an: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    bayar_bank: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bayar_nominal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    no_hp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nama_lengkap: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    anonim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    step: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_funding_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_funding_detail" },
        ]
      },
    ]
  });
};
