const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pwbi_summary', {
    summary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    unit_bisnis: {
      type: DataTypes.STRING(100),
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
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sisa: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    kontribusi: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    pertumbuhan: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pwbi_summary',
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
