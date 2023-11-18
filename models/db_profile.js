const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_profile', {
    profile_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    frequency: {
      type: DataTypes.ENUM('day','week','semi_month','month','year'),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    cycle: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    trial_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    trial_price: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    trial_frequency: {
      type: DataTypes.ENUM('day','week','semi_month','month','year'),
      allowNull: false
    },
    trial_duration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    trial_cycle: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profile_id" },
        ]
      },
    ]
  });
};
