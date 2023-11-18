const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_bantuan_kategori', {
    id_bantuan_kategori: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_bantuan_kategori: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    slug_bantuan_kategori: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    img_bantuan_kategori: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    home: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_bantuan_kategori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bantuan_kategori" },
        ]
      },
    ]
  });
};
