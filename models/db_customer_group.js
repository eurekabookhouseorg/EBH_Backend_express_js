const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_customer_group', {
    customer_group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    approval: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id_display: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id_required: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax_id_display: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax_id_required: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_customer_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
