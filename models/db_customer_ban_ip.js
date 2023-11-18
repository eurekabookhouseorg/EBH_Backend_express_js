const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_customer_ban_ip', {
    customer_ban_ip_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_customer_ban_ip',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_ban_ip_id" },
        ]
      },
      {
        name: "ip",
        using: "BTREE",
        fields: [
          { name: "ip" },
        ]
      },
    ]
  });
};
