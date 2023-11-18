const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_affiliate', {
    affiliate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address_1: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    address_2: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    commission: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tax: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    payment: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    cheque: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    paypal: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    bank_branch_number: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    bank_swift_code: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    bank_account_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    bank_account_number: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_affiliate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "affiliate_id" },
        ]
      },
    ]
  });
};
