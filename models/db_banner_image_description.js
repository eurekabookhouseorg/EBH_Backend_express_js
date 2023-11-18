const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_banner_image_description', {
    banner_image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_banner_image_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "banner_image_id" },
          { name: "language_id" },
        ]
      },
    ]
  });
};
