const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_target', {
    id_target: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bulan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_target',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_target" },
        ]
      },
    ]
  });
};
