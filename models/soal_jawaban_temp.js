const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soal_jawaban_temp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token_soal_kerjakan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_soal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jawaban: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    raguragu: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soal_jawaban_temp',
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
