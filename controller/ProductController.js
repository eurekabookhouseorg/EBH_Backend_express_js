const { sequelize, DataTypes } = require('../connection/conn');
const  db_product_model= require('../models/db_product');
const db_product = db_product_model(sequelize, DataTypes);

const  db_product_description_model= require('../models/db_product_description');
const db_product_description = db_product_description_model(sequelize, DataTypes);

const  db_product_category_model= require('../models/db_product_to_category');
const db_product_category = db_product_category_model(sequelize, DataTypes);

const  db_category_model= require('../models/db_category');
const db_category = db_category_model(sequelize, DataTypes);

const  db_manufacturer_model= require('../models/db_manufacturer');
const db_manufacturer = db_manufacturer_model(sequelize, DataTypes);

exports.getProduct = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const products = await db_product.findAll(
      {
        where:{
          status : 1
        },
      include: [
        {
          model: db_product_description
        }
      ],
      limit : limit
    }
    );

    if (products.length > 0) {

      const mappedProducts = products.map(product => ({
        product_id: product.product_id,
        model: product.model,
        author: product.author,
        productName: product.db_product_description ? product.db_product_description.name : 'Nama Tidak Tersedia',
        location: product.location,
        discount: product.diskon,
        price: product.price,
        quantity: product.quantity,
        productImg: product.image
        // tambahkan properti lain yang diperlukan
      }));
      // Jika data berhasil ditemukan, kirim respons dengan status 200 (OK)
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil ea ea eaaa bisa dungg',
        },
        data: {order : mappedProducts},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.detailProduct = async ( req, res) => {
  try {
    const findId = req.params.product_id;
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    db_product.belongsTo(db_manufacturer, { targetKey: 'manufacturer_id', foreignKey: 'manufacturer_id' });
        const products = await db_product.findByPk(findId, {
          include: [
            {
              model: db_product_description,
            },
            {
              model: db_manufacturer,
            }
          ]
        });
      if(products !== null){
        const originalPrice = parseFloat(products.price);
        const presentasiDiskon = parseFloat(products.diskon);

        let diskonPrice = null;
        if(presentasiDiskon !==0){
          diskonPrice = originalPrice - (originalPrice * (presentasiDiskon / 100))
        }

        res.status(200).json({
          status: {
            code : 200,
            message: 'Data produk berhasil diambil',
          },
          data: {
            order : products,
            diskonPrice : diskonPrice
          },
        });
      }else{
        res.status(404).json({
          status: 404,
          message: 'Data produk tidak ditemukan',
          data: null
        });
      }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.getProductErlangga = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        }
      ],
      where: {
        manufacturer_id: 1
      },
      order : [['product_id', 'DESC']]
    });

    if (products.length > 0) {

      const mappedProducts = products.map(product => ({
        product_id: product.product_id,
        model: product.model,
        author: product.author,
        productName: product.db_product_description ? product.db_product_description.name : 'Nama Tidak Tersedia',
        location: product.location,
        discount: product.diskon,
        price: product.price,
        quantity: product.quantity,
        productImg: product.image,
        manufacturer_id: product.manufacturer_id,
        // tambahkan properti lain yang diperlukan
      }));
      // Jika data berhasil ditemukan, kirim respons dengan status 200 (OK)
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil',
        },
        data: {order : mappedProducts},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.getProductTerbaru = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    const limit = 10;
    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        }
      ],
      where: {
        manufacturer_id: 179
      },
      order : [['product_id', 'DESC']],
      limit : limit
    });

    if (products.length > 0) {

      const mappedProducts = products.map(product => ({
        product_id: product.product_id,
        model: product.model,
        author: product.author,
        productName: product.db_product_description ? product.db_product_description.name : 'Nama Tidak Tersedia',
        location: product.location,
        discount: product.diskon,
        price: product.price,
        quantity: product.quantity,
        productImg: product.image,
        manufacturer_id: product.manufacturer_id,
        // tambahkan properti lain yang diperlukan
      }));
      // Jika data berhasil ditemukan, kirim respons dengan status 200 (OK)
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil',
        },
        data: {order : mappedProducts},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.getProductTam = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    const limit = 10;
    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        }
      ],
      where: {
        manufacturer_id: 179
      },
      order : [['product_id', 'DESC']],
      limit : limit
    });

    if (products.length > 0) {

      const mappedProducts = products.map(product => ({
        product_id: product.product_id,
        model: product.model,
        author: product.author,
        productName: product.db_product_description ? product.db_product_description.name : 'Nama Tidak Tersedia',
        location: product.location,
        discount: product.diskon,
        price: product.price,
        quantity: product.quantity,
        productImg: product.image,
        manufacturer_id: product.manufacturer_id,
        // tambahkan properti lain yang diperlukan
      }));
      // Jika data berhasil ditemukan, kirim respons dengan status 200 (OK)
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil',
        },
        data: {order : mappedProducts},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.getProductKesehatan = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    const limit = 10;
    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        }
      ],
      where: {
        manufacturer_id: 123
      },
      order : [['product_id', 'DESC']],
      limit : limit
    });

    if (products.length > 0) {

      const mappedProducts = products.map(product => ({
        product_id: product.product_id,
        model: product.model,
        author: product.author,
        productName: product.db_product_description ? product.db_product_description.name : 'Nama Tidak Tersedia',
        location: product.location,
        discount: product.diskon,
        price: product.price,
        quantity: product.quantity,
        productImg: product.image,
        manufacturer_id: product.manufacturer_id,
        // tambahkan properti lain yang diperlukan
      }));
      // Jika data berhasil ditemukan, kirim respons dengan status 200 (OK)
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil',
        },
        data: {order : mappedProducts},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.getProductNovel = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    db_product.hasMany(db_product_category, { foreignKey: 'product_id' });

    db_category.belongsToMany(db_product, {
      through: db_product_category,
      foreignKey: 'category_id', // Gantilah dengan nama kolom yang sesuai
      otherKey: 'product_id',    // Gantilah dengan nama kolom yang sesuai
    });
    db_product_category.belongsTo(db_category, {
      foreignKey: 'category_id', // Gantilah dengan nama kolom yang sesuai
    });
    const limit = 10;

    const products = await db_product.findAll(
      {
        where:{
          status : 1
        },
      include: [
        {
          model: db_product_description
        },
        {
          model: db_product_category, // Sertakan model db_product_to_category
          include: [
            {
              model: db_category
            }
          ],
          where: { category_id: 54 }
        }
      ],
      limit : limit
    });

    if (products.length > 0) {

      const mappedProducts = products.map(product => ({
        product_id: product.product_id,
        status: product.status,
        model: product.model,
        author: product.author,
        productName: product.db_product_description ? product.db_product_description.name : 'Nama Tidak Tersedia',
        location: product.location,
        discount: product.diskon,
        price: product.price,
        quantity: product.quantity,
        productImg: product.image,
        manufacturer_id: product.manufacturer_id,
        category_id: product.db_product_to_categories ? product.db_product_to_categories.category_id : 'category_id tidak tersedia',
      }));
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil',
        },
        data: {order : mappedProducts},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: error
    });
  }
}

exports.getAllProduct = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        }
      ]
    });

    if (products.length > 0) {
      // Jika data berhasil ditemukan, kirim respons dengan status 200 (OK)
      res.status(200).json({
        status: {
          code : 200,
          message: 'Data produk berhasil diambil',
        },
        data: {order : products},
      });
    } else {
      // Jika data tidak ditemukan, kirim respons dengan status 404 (Not Found)
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    // Jika terjadi kesalahan, kirim respons dengan status 500 (Internal Server Error)
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk',
      data: null
    });
  }
}

exports.getAllProductWithCategories = async (req, res) => {
  try {
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    db_product.hasMany(db_product_category, { foreignKey: 'product_id' });

    db_category.belongsToMany(db_product, {
      through: db_product_category,
      foreignKey: 'category_id',
      otherKey: 'product_id',   
    });
    db_product_category.belongsTo(db_category, {
      foreignKey: 'category_id',
    });

    const products = await db_product.findAll({
      include: [
        {
          model: db_product_description
        },
        {
          model: db_product_category,
          include: [
            {
              model: db_category
            }
          ]
        }
      ]
    });

    if (products.length > 0) {
      res.status(200).json({
        status: {
          code: 200,
          message: 'Data produk dengan kategori berhasil diambil',
        },
        data: { products }
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'Data produk tidak ditemukan',
        data: null
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data produk dengan kategori',
      data: null
    });
  }
};
