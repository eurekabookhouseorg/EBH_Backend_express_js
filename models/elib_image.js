const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_image', {
    id_image: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category_image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "customer,pustakawan,reader"
    }
  }, {
    sequelize,
    tableName: 'elib_image',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_image" },
        ]
      },
    ]
  });
};
