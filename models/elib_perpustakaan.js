const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elib_perpustakaan', {
    perpustakaan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logo_banner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kode_unik: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    perpustakaan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_petugas: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jenjang_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jenjang: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sekolah: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kota: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provinsi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0 = Reject, 1 = New, 2 = Approve, 3 = Blokir"
    },
    approve_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'elib_perpustakaan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "perpustakaan_id" },
        ]
      },
      {
        name: "address_id",
        using: "BTREE",
        fields: [
          { name: "address_id" },
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
