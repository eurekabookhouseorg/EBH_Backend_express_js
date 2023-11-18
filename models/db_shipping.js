const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_shipping', {
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_rajaongkir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    tax_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    zone_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    zone_1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zone_2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_shipping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "id_rajaongkir",
        using: "BTREE",
        fields: [
          { name: "id_rajaongkir" },
        ]
      },
    ]
  });
};
