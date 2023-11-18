const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_gt_shipping', {
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
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false
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
      allowNull: false
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
    tableName: 'db_gt_shipping',
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
    ]
  });
};
