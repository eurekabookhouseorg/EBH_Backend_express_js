const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_blogs_author', {
    id_blogs_author: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nama_lengkap: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    author_level: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tgl_gabung: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_blogs_author',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_blogs_author" },
        ]
      },
    ]
  });
};
