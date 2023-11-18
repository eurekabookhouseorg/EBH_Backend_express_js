const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_ticket', {
    id_ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    slug_ticket: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title_ticket: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    img_ticket: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.ENUM('Atraksi','Musik','Olahraga','Pameran'),
      allowNull: false
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ketentuan: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ticket" },
        ]
      },
    ]
  });
};
