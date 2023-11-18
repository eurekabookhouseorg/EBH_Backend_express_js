const { sequelize, DataTypes } = require('../connection/conn');
const  db_product_model= require('../models/db_product');
const db_product = db_product_model(sequelize, DataTypes);

const  db_product_description_model= require('../models/db_product_description');
const db_product_description = db_product_description_model(sequelize, DataTypes);

const  db_review_model= require('../models/db_review');
const db_review = db_review_model(sequelize, DataTypes);

const  db_customer_model= require('../models/db_customer');
const db_customer = db_customer_model(sequelize, DataTypes);

exports.getReview = async (req, res) => {
    const findIdProduct = req.params.product_id;
    db_review.hasMany(db_product, { targetKey: 'product_id' , foreignKey: 'product_id' });
    db_review.hasMany(db_customer, { targetKey: 'customer_id' , foreignKey: 'customer_id' });
    
    const reviews = await db_review.findAll({
        where: { product_id: findIdProduct }, // Filter ulasan berdasarkan product_id
        include: [
            {
                model: db_product
            },
            {
                model: db_customer
            }
        ]
    });

    if (reviews.length > 0) {
        const mappedRiviews = reviews.map(review => ({
            review_id : review.review_id, 
            product_id : review.product_id, 
            customer_id : review.customer_id,
            text : review.text,
            rating : review.rating,
            date_added : review.date_added,
            firstname : review.db_customers[0] ? review.db_customers[0].firstname : 'Nama Tidak Tersedia',
            lastname : review.db_customers[0] ? review.db_customers[0].lastname : 'Nama Tidak Tersedia',
            Image : review.db_products[0] ? review.db_products[0].image : 'gambar Tidak Tersedia',
        }))
        res.status(200).json({
            status: {
                code: 200,
                message: 'Data ulasan berhasil diambil',
            },
            data: { order : mappedRiviews }
        });
    } else {
        res.status(404).json({
            status: 404,
            message: 'Tidak ada ulasan ditemukan untuk produk ini',
            data: null
        });
    }
}
