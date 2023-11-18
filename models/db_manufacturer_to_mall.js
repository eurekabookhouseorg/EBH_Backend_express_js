const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_manufacturer_to_mall', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manufacturer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_manufacturer_to_mall',
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
        name: "pmall_id",
        using: "BTREE",
        fields: [
          { name: "pmall_id" },
        ]
      },
    ]
  });
};
