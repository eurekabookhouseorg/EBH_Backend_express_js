const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_coupon', {
    coupon_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    jenis: {
      type: DataTypes.ENUM('Ongkir','Potongan','Langsung','PotongGrandTotal'),
      allowNull: false
    },
    potongan: {
      type: DataTypes.ENUM('persen','jumlah_tetap'),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('K','M','O'),
      allowNull: false
    },
    min_belanja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    logged: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    shipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uses_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uses_customer: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    web: {
      type: DataTypes.ENUM('EBH','BE'),
      allowNull: false
    },
    ambil_kode: {
      type: DataTypes.ENUM('db_coupon','db_coupon_history'),
      allowNull: false
    },
    code_grouping: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_coupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
        ]
      },
    ]
  });
};
