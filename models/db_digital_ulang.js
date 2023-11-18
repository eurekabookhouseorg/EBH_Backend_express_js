const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_digital_ulang', {
    id_digital_ulang: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    atas_nama: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    departemen: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    jabatan: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    no_tujuan: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    kode_nominal: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    aktif: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'db_digital_ulang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_digital_ulang" },
        ]
      },
    ]
  });
};
