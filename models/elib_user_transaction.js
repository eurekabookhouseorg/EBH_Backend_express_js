const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_user_transaction', {
    transaksi_userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_user"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "D Customer Perpustakaan, Detail Data Terdapat Di Table db_customer"
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table db_product"
    },
    code_gift: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    code_activation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    elib_product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Detail Data Terdapat Di Table elib_product"
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jenjang: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_jenjang\t"
    },
    kelas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Detail Data Terdapat Di Table elib_group"
    },
    model: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_pengajuan: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "Status : 0 = Tidak Aktif, 1 = Aktif"
    },
    date_pinjam: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'elib_user_transaction',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaksi_userid" },
        ]
      },
    ]
  });
};
