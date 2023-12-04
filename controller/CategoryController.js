const { where } = require('sequelize');
const { sequelize, DataTypes } = require('../connection/conn');
const  db_category_model= require('../models/db_category');
const categories = db_category_model(sequelize, DataTypes);

const  db_category_description_model= require('../models/db_category_description');
const category_desc = db_category_description_model(sequelize, DataTypes);

const  db_product_model= require('../models/db_product');
const db_product = db_product_model(sequelize, DataTypes);

const  db_product_description_model= require('../models/db_product_description');
const db_product_description = db_product_description_model(sequelize, DataTypes);

const  db_product_category_model= require('../models/db_product_to_category');
const db_product_category = db_product_category_model(sequelize, DataTypes);

exports.getCategories = async(req, res) => {
    try {
        categories.belongsTo(category_desc, { targetKey: 'category_id', foreignKey: 'category_id' });
        const dataCetegory = await categories.findAll({
          include: [
            {
              model: category_desc
            }
          ],
          where : {status : true}
        });

        if(dataCetegory.length > 0) {
          // const mappedCategories = dataCetegory.map(category => ({
          //   category_id: category.category_id,
          //   name: category.db_category_description ? category.db_category_description.name : 'Nama Tidak Tersedia',
          //   image: category.image,
          //   status: category.status,
          //   erlangga: category.erlangga,
          //   date_added: category.date_added,
          //   date_modified: category.date_modified,
          // }))
          res.status(200).json({
            status: {
              code : 200,
              message: 'Data Category berhasil diambil',
            },
            data: {order : dataCetegory},
          });
        } else {
          // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
          res.status(404).json({
            status: 404,
            message: 'Data Category tidak ditemukan',
            data: null
          });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
        status: 'error',
        message: 'Terjadi kesalahan saat mengambil data Gambar',
        data: null
        });
    }
}

exports.megaMenuCategories = async(req, res) => {
  try {
      categories.belongsTo(category_desc, { targetKey: 'category_id', foreignKey: 'category_id' });
      const dataCetegory = await categories.findAll({
        include: [
          {
            model: category_desc
          }
        ],
        where : {mega_menu : 1},
        limit: 11
      });

      if(dataCetegory.length > 0) {
        const mappedCategories = dataCetegory.map(category => ({
          category_id: category.category_id,
          name: category.db_category_description ? category.db_category_description.name : 'Nama Tidak Tersedia',
          slug: category.db_category_description ? category.db_category_description.slug : 'Slug Tidak Tersedia',
          image: category.image,
          status: category.status,
          erlangga: category.erlangga,
          date_added: category.date_added,
          date_modified: category.date_modified,
        }))
        res.status(200).json({
          status: {
            code : 200,
            message: 'Data Category berhasil diambil',
          },
          data: {order : mappedCategories},
        });
      } else {
        // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
        res.status(404).json({
          status: 404,
          message: 'Data Category tidak ditemukan',
          data: null
        });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data Gambar',
      data: null
      });
  }
}

exports.detailCetegory = async(req, res) => {
    try {
        categories.belongsTo(category_desc, { targetKey: 'category_id', foreignKey: 'category_id' });

        const findId = req.body.category_id;
        const dataDetailCetegory = await categories.findByPk(findId, {
          include: [
            {
              model: category_desc
            }
          ]
        });
    
        res.json({dataDetailCetegory});
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.detailSlugCategory = async(req, res) =>{
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    db_product.hasMany(db_product_category, { foreignKey: 'product_id' });
    categories.belongsToMany(db_product, {
      through: db_product_category,
      foreignKey: 'category_id',
      otherKey: 'product_id',   
    });
    db_product_category.belongsTo(categories, {
      foreignKey: 'category_id',
    });

    categories.belongsTo(category_desc, { targetKey: 'category_id', foreignKey: 'category_id' });
    const slug = req.params.slug
    const dataCetegory = await categories.findAll({
      include: [
        {
          model: db_product,
          include : [
            {
              model: db_product_description
            }
          ]
        },
        {
          model: category_desc,
          where : {slug : slug}
        },
      ],
    });

    if(dataCetegory.length > 0) {
      const mappedSlugCategory = dataCetegory.map(product => {
        if (product.db_products && Array.isArray(product.db_products)) {
          return product.db_products.map(dbProduct => ({
            product_id: dbProduct.product_id || "tidak tersedia",
            name: (dbProduct.db_product_description && dbProduct.db_product_description.name) || "tidak tersedia",
            model: dbProduct.model || "tidak tersedia",
            sku: dbProduct.sku || "tidak tersedia",
            author: dbProduct.author || "tidak tersedia",
            stock_status_id: dbProduct.stock_status_id || "tidak tersedia",
            image: dbProduct.image || "tidak tersedia",
            price: dbProduct.price || "tidak tersedia",
            diskon: dbProduct.diskon || "tidak tersedia",
          }));
        } else {
          return ["tidak tersedia"];
        }
      });
      
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data Category berhasil diambil',
        },
        data: {order : mappedSlugCategory}
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'Data Category tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data',
      data: null
      });
  }
}

exports.getSubCategories = async (req, res) => {
  try {
    categories.belongsTo(category_desc, { targetKey: 'category_id', foreignKey: 'category_id' });
    const dataCategory = await categories.findAll({
      include: [
        {
          model: category_desc,
        },
      ],
      where: { status: true },
    });

    if (dataCategory.length > 0) {
      // Create a map to store categories based on category_id
      const categoryMap = new Map();

      // Initialize the result array
      const result = [];

      // Populate the categoryMap and result array
      dataCategory.forEach(category => {
        const categoryId = category.category_id;
        const parentId = category.parent_id;

        if (!categoryMap.has(categoryId)) {
          categoryMap.set(categoryId, {
            category_id: categoryId,
            parent_id: category.parent_id,
            name: category.db_category_description ? category.db_category_description.name : 'Nama Tidak Tersedia',
            image: category.image,
            status: category.status,
            erlangga: category.erlangga,
            date_added: category.date_added,
            date_modified: category.date_modified,
            subcategories: [],
          });
        }

        if (parentId === 0) {
          // If parent_id is 0, add to the result array
          result.push(categoryMap.get(categoryId));
        } else {
          // If parent_id is not 0, add as a subcategory to its parent
          if (!categoryMap.has(parentId)) {
            categoryMap.set(parentId, {
              subcategories: [],
            });
          }
          categoryMap.get(parentId).subcategories.push(categoryMap.get(categoryId));
        }
      });

      res.status(200).json({
        status: {
          code: 200,
          message: 'Data Category berhasil diambil',
        },
        data: { order: result },
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'Data Category tidak ditemukan',
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data Gambar',
      data: null,
    });
  }
};
