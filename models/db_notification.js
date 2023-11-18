const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_notification', {
    id_notification: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoice_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    judul_notif: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isi_notif: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tgl_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dibaca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jenis: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    variasi: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_notification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notification" },
        ]
      },
    ]
  });
};
