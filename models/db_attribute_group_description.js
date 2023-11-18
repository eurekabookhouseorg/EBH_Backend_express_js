const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_attribute_group_description', {
    attribute_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_attribute_group_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_group_id" },
          { name: "language_id" },
        ]
      },
    ]
  });
};
