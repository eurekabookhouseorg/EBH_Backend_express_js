const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_peringatan_hari', {
    id_peringatan_hari: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tgl_peringatan_hari: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nama_peringatan_hari: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    img_peringatan_hari: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    penting: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_peringatan_hari',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_peringatan_hari" },
        ]
      },
    ]
  });
};
