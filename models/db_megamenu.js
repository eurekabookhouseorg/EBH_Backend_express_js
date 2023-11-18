const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_megamenu', {
    megamenu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_group: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2
    },
    width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    submenu_width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    colum_width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    submenu_colum_width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    colums: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "1"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_content: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2
    },
    show_title: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    type_submenu: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "1"
    },
    level_depth: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    published: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    position: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    show_sub: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    privacy: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    position_type: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: "top"
    },
    menu_class: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submenu_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    left: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    right: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    widget_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_megamenu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "megamenu_id" },
        ]
      },
    ]
  });
};
