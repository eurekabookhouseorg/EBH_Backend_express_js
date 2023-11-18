const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_customer', {
    customer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    credential: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = Default, 1 = EBH, 2 = ELIBYU"
    },
    is_elibu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    cart: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wishlist: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1 = OFFLINE,\r\n2 = ONLINE,\r\n3 = LOCK,\r\n4 = NONAKTIF"
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    avatar: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    device: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "Web"
    }
  }, {
    sequelize,
    tableName: 'db_customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "firstname",
        using: "BTREE",
        fields: [
          { name: "firstname" },
        ]
      },
      {
        name: "email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "telephone",
        using: "BTREE",
        fields: [
          { name: "telephone" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
