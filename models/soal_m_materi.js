const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soal_m_materi', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_mapel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    materi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soal_m_materi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
