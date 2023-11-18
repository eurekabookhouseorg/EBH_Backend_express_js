const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eu_harga2022', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    judul: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    awal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    akhir: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'eu_harga2022',
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
      {
        name: "kode",
        using: "BTREE",
        fields: [
          { name: "kode" },
        ]
      },
    ]
  });
};
