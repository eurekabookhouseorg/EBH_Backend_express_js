const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('g_tebakgambar_data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token_slug: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gambar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jawaban: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    waktu: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'g_tebakgambar_data',
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
