const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_bank', {
    id_bank: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bank: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    no_rek: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_add: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bank" },
        ]
      },
    ]
  });
};
