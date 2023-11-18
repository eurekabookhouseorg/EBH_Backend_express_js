const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product_variation', {
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bundling_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_masa_aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    masa_aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eksemplar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 = aktif, 0 = tidak aktif"
    },
    tipe: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "customer dan pustakawan"
    }
  }, {
    sequelize,
    tableName: 'elib_product_variation',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_variasi" },
        ]
      },
    ]
  });
};
