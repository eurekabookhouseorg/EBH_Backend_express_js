const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_tax_rule', {
    tax_rule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tax_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax_rate_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    based: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'db_tax_rule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_rule_id" },
        ]
      },
    ]
  });
};
