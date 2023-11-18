const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_campaign', {
    id_campaign: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_campaign: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    slug_campaign: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    seo_campaign: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    banner: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    site: {
      type: DataTypes.ENUM('EBH','BE'),
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_berakhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_campaign',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_campaign" },
        ]
      },
    ]
  });
};
