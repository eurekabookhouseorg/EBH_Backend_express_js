const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_order_fraud', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country_match: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    high_risk_country: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_region: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_latitude: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    ip_longitude: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    ip_isp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_org: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_asnum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_user_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_country_confidence: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ip_region_confidence: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ip_city_confidence: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ip_postal_confidence: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ip_postal_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ip_accuracy_radius: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_net_speed_cell: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_metro_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_area_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_time_zone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_region_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_domain: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_country_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ip_continent_code: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ip_corporate_proxy: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    anonymous_proxy: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    proxy_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_trans_proxy: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    free_mail: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    carder_email: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    high_risk_username: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    high_risk_password: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    bin_match: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    bin_country: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    bin_name_match: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    bin_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bin_phone_match: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    bin_phone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    customer_phone_in_billing_location: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    ship_forward: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    city_postal_match: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ship_city_postal_match: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    score: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    risk_score: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    queries_remaining: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxmind_id: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'db_order_fraud',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
