const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_history_update', {
    id_history: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meta: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    jenjang: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tahun_terbit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    halaman: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manufacture: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status_update: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = waiting, 1 = approved, 2 = rejected"
    }
  }, {
    sequelize,
    tableName: 'elib_history_update',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_history" },
        ]
      },
    ]
  });
};
