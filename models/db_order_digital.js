const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_digital', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "0"
    },
    invoice_prefix: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    no_faktur: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer_id: {
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
    payment_method: {
      type: DataTypes.TEXT,
      allowNull: false
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
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    user_agent: {
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
    perangkat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nohp: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pulsa_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pulsa_op: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pulsa_nominal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pulsa_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pulsa_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    masaaktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ref_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    no_sn: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pln_meter_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pln_subscriber_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pln_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pln_segment_power: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pulsa_status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_order_digital',
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
