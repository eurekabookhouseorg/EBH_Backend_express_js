const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bk_guest', {
    guest_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date_birth: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instagram: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    hobby: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    favorite: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    school: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bk_guest',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guest_id" },
        ]
      },
      {
        name: "school",
        using: "BTREE",
        fields: [
          { name: "school" },
        ]
      },
      {
        name: "gender",
        using: "BTREE",
        fields: [
          { name: "gender" },
        ]
      },
      {
        name: "email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
