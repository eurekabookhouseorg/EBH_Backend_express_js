const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_erlangga', {
    no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kode_buku: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    item_number: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    writer: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    curriculum: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    segment: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    series: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    jilid: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    publish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    publish_year: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    kelompok_bidang: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    bidang: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nama_pelajaran: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tax_bupel: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gross_depth: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gross_height: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gross_width: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sales_price: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    net_weight: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    stok: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'master_erlangga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no" },
        ]
      },
    ]
  });
};
