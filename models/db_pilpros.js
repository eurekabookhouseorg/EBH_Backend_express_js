const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_pilpros', {
    id_pilpros: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dapil: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_vote: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_pilpros',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pilpros" },
        ]
      },
    ]
  });
};
