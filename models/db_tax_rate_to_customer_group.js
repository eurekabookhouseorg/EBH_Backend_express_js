const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_tax_rate_to_customer_group', {
    tax_rate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'db_tax_rate_to_customer_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_rate_id" },
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
