const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_history', {
    order_history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    awb: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    invoice_prefix: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'db_order_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_history_id" },
        ]
      },
    ]
  });
};
