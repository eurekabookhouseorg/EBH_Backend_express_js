const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product_customer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Ada Di Table elib_product_variation"
    },
    transaksi_userid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    borrow_from: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Data : library, customer, reader"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Status : 0 = Tidak Aktif, 1 = Aktif"
    },
    elib_borrowed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    elib_expired_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deactivated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elib_product_customer',
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
