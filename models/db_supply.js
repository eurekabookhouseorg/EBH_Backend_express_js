const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_supply', {
    supply_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    supply_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    npwp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    top: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_jenis_supply: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_rek: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atasnama_rek: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    retur: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_register: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'db_supply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supply_id" },
        ]
      },
    ]
  });
};
