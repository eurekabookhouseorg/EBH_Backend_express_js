const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_author', {
    id_author: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode_author: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    nama_author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    slug_author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    birthday_author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description_author: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foto_author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_meta: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_author',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_author" },
        ]
      },
    ]
  });
};
