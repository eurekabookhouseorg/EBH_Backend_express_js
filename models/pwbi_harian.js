const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pwbi_harian', {
    harian_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    bulan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weeknum: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    unit_bisnis: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cabang: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    marketing: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    penjualan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    target: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cabang_sub: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pwbi_harian',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "harian_id" },
        ]
      },
    ]
  });
};
