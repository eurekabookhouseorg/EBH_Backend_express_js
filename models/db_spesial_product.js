const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_spesial_product', {
    id_spesial_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_spesial: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jenis: {
      type: DataTypes.ENUM('produk','kategori','merk'),
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_merk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount_type: {
      type: DataTypes.ENUM('percent','nominal'),
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_spesial_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_spesial_product" },
        ]
      },
    ]
  });
};
