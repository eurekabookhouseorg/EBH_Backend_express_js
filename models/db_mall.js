const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_mall', {
    mall_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mall_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image_header: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nama_perusahaan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nama_merk: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alamat_perusahaan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email_pic: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nama_pic: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    jabatan_pic: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    telp_pic: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    npwp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    siup: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    haki: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sppkp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    skt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    akta_perusahaan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    documen_lain: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ktp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_rajaongkir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zone_1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zone_2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_en: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "d623c9206"
    },
    img_ktp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bank_number: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    date_register: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    vendor: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    official: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    reseller: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    instagram: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twitter: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    saldo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    step_registration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    status_approve: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_mall',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
    ]
  });
};
