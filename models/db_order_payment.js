const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_payment', {
    id_order_payment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_invoice: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bank_code: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    va_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ccy: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    expired: {
      type: DataTypes.DATE,
      allowNull: true
    },
    iv_total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iv_fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iv_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iv_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pay_code: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    pay_message: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pay_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    debit_from: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    debit_from_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    credit_to: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    credit_to_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_datetime: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    payment_ref: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    debit_from_bank: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    credit_to_bank: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    full_bca: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    installment_bca: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    pay_datetime: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_order_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_order_payment" },
        ]
      },
    ]
  });
};
