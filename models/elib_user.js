const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_user', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nis: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Customer ID Anggota Perpustakaan"
    },
    perpustakaan_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
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
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_register: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = Menunggu Approve, 1 =  Approve, 2 = Reject"
    },
    aktif: {
      type: DataTypes.ENUM('N','Y'),
      allowNull: false,
      defaultValue: "N",
      comment: "N = No,\r\nY = Yes"
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "password yg kepake ada di db_customer, bukan yg ini\r\n"
    },
    date_approved: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_rejected: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elib_user',
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
    ]
  });
};
