const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_product_variation', {
    id_product_variation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_variasi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pilihan: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_product_variation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_product_variation" },
        ]
      },
    ]
  });
};
