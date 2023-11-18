const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_bantuan', {
    id_bantuan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    judul_pertanyaan: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    jawab_pertanyaan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slug_judul: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    dilihat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    home: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_bantuan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bantuan" },
        ]
      },
    ]
  });
};
