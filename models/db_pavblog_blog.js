const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_pavblog_blog', {
    blog_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meta_keyword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meta_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meta_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_modified: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    video_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_pavblog_blog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "blog_id" },
        ]
      },
    ]
  });
};
