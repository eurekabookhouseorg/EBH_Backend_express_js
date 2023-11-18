const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_mall_to_banner', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slider: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    text1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    text2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kategory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    date_uplod: {
      type: DataTypes.DATE,
      allowNull: false
    },
    store: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mall_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_mall_to_banner',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
