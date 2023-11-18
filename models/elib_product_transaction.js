const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product_transaction', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "Status : di table elib_history_status\r\n"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID Customer Perpustakaan, Detail Data Terdapat Di Table db_customer"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_user"
    },
    transaksi_userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_user_transaction"
    },
    elib_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_product"
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_pengadaan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_history: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'elib_product_transaction',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
