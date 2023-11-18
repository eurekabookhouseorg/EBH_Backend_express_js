const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_ticket', {
    id_order_ticket: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kode_order: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    expiredtimewib: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    grandtotal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    orderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    statuscode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_order: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_order_ticket" },
        ]
      },
    ]
  });
};
