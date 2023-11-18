const { sequelize, DataTypes } = require('../connection/conn');
const  db_product_model= require('../models/db_product');
const db_product = db_product_model(sequelize, DataTypes);

const  db_product_description_model= require('../models/db_product_description');
const db_product_description = db_product_description_model(sequelize, DataTypes);

const  db_product_category_model= require('../models/db_product_to_category');
const db_product_category = db_product_category_model(sequelize, DataTypes);

const  db_category_model= require('../models/db_category');
const db_category = db_category_model(sequelize, DataTypes);

exports.getProduct = async (req, res) => {
  const filters = req.query;
  db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });

  try {
    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        }
      ]
    });

    const filteredProducts = products.filter(product => {
      let isValid = true;
      for (key in filters) {
        if (key === 'name' && filters[key]) {
          // Filter berdasarkan nama yang ada di db_product_description
          if (product.db_product_description && product.db_product_description.name.toLowerCase().includes(filters[key].toLowerCase())) {
            continue;
          }
        } else if (filters[key] && product[key].toLowerCase().includes(filters[key].toLowerCase())) {
          continue;
        }
        isValid = false;
        break;
      }

      return isValid;
    });

    res.send(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan dalam permintaan data produk.' });
  }
};

  