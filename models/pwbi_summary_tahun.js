const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pwbi_summary_tahun', {
    summary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    unit_bisnis: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tahun: {
      type: DataTypes.INTEGER,
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
    sisa: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    pembanding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pertumbuhan: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pwbi_summary_tahun',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "summary_id" },
        ]
      },
    ]
  });
};
