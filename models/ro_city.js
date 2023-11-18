const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ro_city', {
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ro_city',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
    ]
  });
};
