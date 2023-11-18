const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_weight_class', {
    weight_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    }
  }, {
    sequelize,
    tableName: 'db_weight_class',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "weight_class_id" },
        ]
      },
    ]
  });
};
