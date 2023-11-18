const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_cart', {
    id_cart: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_add: {
      type: DataTypes.DATE,
      allowNull: false
    },
    token_session: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_elibu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_checked: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_cart',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cart" },
        ]
      },
    ]
  });
};
