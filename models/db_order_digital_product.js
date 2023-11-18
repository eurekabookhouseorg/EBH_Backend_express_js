const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_digital_product', {
    order_product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'db_order_digital_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_product_id" },
        ]
      },
    ]
  });
};
