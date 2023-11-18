const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_komplain_cs', {
    komplain_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    komplain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tgl_komplain: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nama_user: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solusi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_update: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pic_cs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pic_it: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_komplain_cs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "komplain_id" },
        ]
      },
    ]
  });
};
