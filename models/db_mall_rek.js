const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_mall_rek', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_bank: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nomor_rekening: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    atas_nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_mall_rek',
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
