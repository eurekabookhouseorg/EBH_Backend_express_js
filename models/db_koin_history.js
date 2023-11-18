const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_koin_history', {
    id_koin_history: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_koin_history: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    plusminus: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    berapa_koin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_koin_history: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_koin_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_koin_history" },
        ]
      },
    ]
  });
};
