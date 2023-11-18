const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_manufacturer_to_rating', {
    rating_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manufacturer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1 = Block, 0 = Unblock"
    }
  }, {
    sequelize,
    tableName: 'db_manufacturer_to_rating',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rating_id" },
        ]
      },
    ]
  });
};
