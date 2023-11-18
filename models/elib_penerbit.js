const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_penerbit', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_penerbit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_sub_penerbit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    kode_penerbit: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    penerbit: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kota: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kodepos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jabatan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bank: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    norekening: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    anrekening: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    finance_pic: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    finance_phone: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    finance_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date_register: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_approve: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0 = Reject, 1 = New, 2 = Approve, 3 = Blokir \t"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'elib_penerbit',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "id_penerbit",
        using: "BTREE",
        fields: [
          { name: "id_penerbit" },
        ]
      },
      {
        name: "id_sub_penerbit",
        using: "BTREE",
        fields: [
          { name: "id_sub_penerbit" },
        ]
      },
      {
        name: "kode_penerbit",
        using: "BTREE",
        fields: [
          { name: "kode_penerbit" },
        ]
      },
    ]
  });
};
