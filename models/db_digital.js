const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_digital', {
    pulsa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pulsa_code: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pulsa_op: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pulsa_nominal: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pulsa_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pulsa_price_buy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pulsa_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pulsa_jenis: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    masaaktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_digital',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pulsa_id" },
        ]
      },
    ]
  });
};
