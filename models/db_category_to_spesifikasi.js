const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_category_to_spesifikasi', {
    id_category_to_spesifikasi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_spesifikasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_category_to_spesifikasi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_category_to_spesifikasi" },
        ]
      },
    ]
  });
};
