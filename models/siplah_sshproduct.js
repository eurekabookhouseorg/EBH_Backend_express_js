const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('siplah_sshproduct', {
    ssh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    model: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    judul: {
      type: DataTypes.STRING(58),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'siplah_sshproduct',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ssh_id" },
        ]
      },
      {
        name: "model",
        using: "BTREE",
        fields: [
          { name: "model" },
        ]
      },
    ]
  });
};
