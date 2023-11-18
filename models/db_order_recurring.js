const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_recurring', {
    order_recurring_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profile_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profile_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    recurring_frequency: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    recurring_cycle: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    recurring_duration: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    recurring_price: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    trial: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    trial_frequency: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    trial_cycle: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    trial_duration: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    trial_price: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    profile_reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_recurring',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_recurring_id" },
        ]
      },
    ]
  });
};
