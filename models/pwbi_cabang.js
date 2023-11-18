const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pwbi_cabang', {
    cidx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    unit_bisnis: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cabang: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marketing: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jabatan: {
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
    pencapaian: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'pwbi_cabang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cidx" },
        ]
      },
    ]
  });
};
