const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_jenjang', {
    jenjang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    jenjang: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cover: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type_jenjang: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elib_jenjang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "jenjang_id" },
        ]
      },
    ]
  });
};
