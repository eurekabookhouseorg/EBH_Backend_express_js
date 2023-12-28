const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    invoice_prefix: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    no_invoice: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    no_faktur: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mall_id_rajong: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    berattotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    awb: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ongkoskirim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    freeongkir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal_final: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    store_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "eurekabookhouse.co.id"
    },
    store_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_company: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_company_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_tax_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_address_1: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    payment_address_2: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    payment_city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    payment_postcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    payment_country: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    payment_country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_zone: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    payment_zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_address_format: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_code: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    shipping_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipping_firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shipping_lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shipping_company: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shipping_address_1: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    shipping_address_2: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    shipping_city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    shipping_postcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    shipping_country: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    shipping_country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipping_zone: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    shipping_zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipping_address_format: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shipping_method: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    shipping_code: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    shipping_kurir: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    shipping_kurir_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    catatan_penjual: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_kupon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    order_baca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    withdraw_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    affiliate_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commission: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency_code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    currency_value: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 1.00000000
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    forwarded_ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    user_agent: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    accept_language: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_invoice: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    konfirm_bayar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    perangkat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    token_midtrans: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
