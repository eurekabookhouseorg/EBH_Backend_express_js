const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_product_discount', {
    id_discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipe: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "pustakawan,customer"
    }
  }, {
    sequelize,
    tableName: 'elib_product_discount',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_discount" },
        ]
      },
    ]
  });
};
