const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ro_wilayah', {
    kelurahan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kd_prop: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    propinsi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kd_kab_kota: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    kabupaten_kota: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kd_kec: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    kecamatan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kd_kelurahan_desa: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    kelurahan_desa: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ro_wilayah',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kelurahan_id" },
        ]
      },
    ]
  });
};
