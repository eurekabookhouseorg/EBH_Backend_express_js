const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_address', {
    address_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    company: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    tax_id: {
      type: DataTypes.STRING(32),
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
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(50),
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
    tableName: 'db_address',
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
      {
        name: "zone_1",
        using: "BTREE",
        fields: [
          { name: "zone_1" },
        ]
      },
      {
        name: "province",
        using: "BTREE",
        fields: [
          { name: "province" },
        ]
      },
      {
        name: "zone_id",
        using: "BTREE",
        fields: [
          { name: "zone_id" },
        ]
      },
      {
        name: "city",
        using: "BTREE",
        fields: [
          { name: "city" },
        ]
      },
      {
        name: "firstname",
        using: "BTREE",
        fields: [
          { name: "firstname" },
        ]
      },
    ]
  });
};
