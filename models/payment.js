const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    confirm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ke: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dates: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    t: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    g: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    l: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bank: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nobank: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    akun: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    komentar: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_creates: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "confirm_id" },
        ]
      },
    ]
  });
};
