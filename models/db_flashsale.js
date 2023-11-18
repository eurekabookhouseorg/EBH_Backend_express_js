const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_flashsale', {
    id_flashsale: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_flashsale: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seo_flashsale: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    syarat_ketentuan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jadwal: {
      type: DataTypes.ENUM('00:00','08:00','16:00',''),
      allowNull: true
    },
    tgl_mulai: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tgl_akhir: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_flashsale',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_flashsale" },
        ]
      },
    ]
  });
};
