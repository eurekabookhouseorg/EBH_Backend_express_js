const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_voucher', {
    order_voucher_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    from_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    from_email: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    to_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    to_email: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    voucher_theme_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_voucher',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_voucher_id" },
        ]
      },
    ]
  });
};
