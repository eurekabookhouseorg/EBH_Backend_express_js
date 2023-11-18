const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_length_class', {
    length_class_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_length_class',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "length_class_id" },
        ]
      },
    ]
  });
};
