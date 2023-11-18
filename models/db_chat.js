const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_chat', {
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dari: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kepada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isi_pesan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dibaca: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
    ]
  });
};
