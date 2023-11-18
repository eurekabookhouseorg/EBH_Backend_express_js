const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_currency', {
    currency_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    symbol_left: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    symbol_right: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    decimal_place: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    value: {
      type: DataTypes.FLOAT(15,8),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'db_currency',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "currency_id" },
        ]
      },
    ]
  });
};
