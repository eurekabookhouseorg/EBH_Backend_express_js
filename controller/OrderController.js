const {sequelize, DataTypes} = require("../connection/conn");
const midtransClient = require('midtrans-client');

const db_order = require("../models/db_order");
const order = db_order(sequelize, DataTypes);

const db_order_product = require("../models/db_order_product");
const order_product = db_order_product(sequelize, DataTypes);

const db_order_total = require("../models/db_order_total");
const order_total = db_order_total(sequelize, DataTypes);

const db_order_history = require("../models/db_order_history");
const order_history = db_order_history(sequelize, DataTypes);

const db_order_status = require("../models/db_order_status");
const order_status = db_order_total(sequelize, DataTypes);

const db_customer = require("../models/db_customer");
const customers = db_customer(sequelize, DataTypes);

const  db_product_model= require('../models/db_product');
const db_product = db_product_model(sequelize, DataTypes);

const  db_product_description_model= require('../models/db_product_description');
const db_product_description = db_product_description_model(sequelize, DataTypes);

const  db_notification_model= require('../models/db_notification');
const db_notification = db_notification_model(sequelize, DataTypes);

// const { Op } = require('sequelize');

const customErrorMiddleware = require("../middleware/middleware.result")

exports.getOrder = async(req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);
    order.belongsTo(order_product, { targetKey: 'order_id', foreignKey: 'order_id' });
    order_product.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'product_id' });
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    
    try {
        if (!errorsFromMiddleware) {
            const { customer_id } = req.query;

            const data = await customers.findByPk(customer_id);

            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                const dataOrder = await order.findAll({
                    where : {
                        customer_id: customer_id
                    },
                    include: [
                        {
                            model : order_product,
                            include : [
                                {
                                    model: db_product,
                                    include : [
                                        {
                                            model : db_product_description
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    order: [['order_id', 'desc']]
                })

                if(dataOrder){
                    const groupedOrder = {};
                    dataOrder.forEach((order) => {
                        const order_id = order.order_id;
                        if (!groupedOrder[order_id]) {
                            groupedOrder[order_id] = {
                                order_id: order_id,
                                invoice_no: order.invoice_no,
                                date_added: order.date_added,
                                products: [],
                            };
                        }
                        groupedOrder[order_id].products.push({
                            product_id: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.product_id : null,
                            product_name: order.db_order_product && order.db_order_product.db_product && order.db_order_product.db_product.db_product_description ? order.db_order_product.db_product.db_product_description.name: null,
                            qty: order.db_order_product.quantity,
                            model: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.model : null,
                            sku: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.sku : null,
                            is_elibu: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.is_elibu : null,
                            id_author: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.id_author : null,
                            author: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.author : null,
                            location: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.location : null,
                            quantity: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.quantity : null,
                            stock_status_id: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.stock_status_id : null,
                            image: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.image : null,
                            manufacturer_id: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.manufacturer_id : null,
                            manufacturer: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.manufacturer : null,
                            price: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.price : null,
                            diskon: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.diskon : null,
                            viewed: order.db_order_product && order.db_order_product.db_product ? order.db_order_product.db_product.viewed : null
                        });
                        
                    });

                    const groupedOrderArray = Object.values(groupedOrder).sort((a, b) => b.order_id - a.order_id);

                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Order berhasil ditemukan'
                        },
                        data : [
                                {order : groupedOrderArray},
                                {original: dataOrder}
                        ]
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'Order tidak ditemukan'
                        }
                    });
                }
            } else {
                res.status(401).json({
                    status: {
                        code: 401,
                        message: 'Data tidak dapat diakses karena token tidak valid'
                    }
                });
            }
        }else {
            res.status(401).json({
                status: {
                    code: 401,
                    message: 'Terjadi kesalahan pada middleware'
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            status: {
                code: 500,
                message: error.message,
            },
        });
    }
}

exports.detailOrder = async(req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);
    order.belongsTo(order_product, { targetKey: 'order_id', foreignKey: 'order_id' });
    order_product.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'product_id' });
    db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    
    try {
        if (!errorsFromMiddleware) {
            const { customer_id } = req.query;
            const { order_id } = req.query;

            const data = await customers.findByPk(customer_id);

            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                const dataOrder = await order.findAll({
                    where : {
                        customer_id: customer_id,
                        order_id : order_id
                    },
                    include: [
                        {
                            model : order_product,
                            include : [
                                {
                                    model: db_product,
                                    include : [
                                        {
                                            model : db_product_description
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                })

                if(dataOrder){
                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Order berhasil ditemukan'
                        },
                        data : [
                                {order : dataOrder}
                        ],
                        tokenMitrans : dataOrder.token_mitrans
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'Order tidak ditemukan'
                        }
                    });
                }
            } else {
                res.status(401).json({
                    status: {
                        code: 401,
                        message: 'Data tidak dapat diakses karena token tidak valid'
                    }
                });
            }
        }else {
            res.status(401).json({
                status: {
                    code: 401,
                    message: 'Terjadi kesalahan pada middleware'
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            status: {
                code: 500,
                message: error.message,
            },
        });
    }
}

exports.checkoutProduct = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);

    try {
        if (!errorsFromMiddleware) {
            const findId = req.body.customer_id;
            const data = await customers.findByPk(findId)

            const apiKey = data.token

            const clientApiKey = req.get('Authorization');

            const currentDateTime = new Date();
            const year = currentDateTime.getFullYear().toString().slice(-2); // Ambil dua digit terakhir tahun
            const month = ('0' + (currentDateTime.getMonth() + 1)).slice(-2); // Ambil dua digit bulan
            const day = ('0' + currentDateTime.getDate()).slice(-2); 

            const lastInvoice = await order.max('invoice_no');

            // Extract the counter part from the last invoice
            const lastInvoiceCounter = lastInvoice ? parseInt(lastInvoice.slice(-4), 10) : 0;

            // Increment the counter
            const newInvoiceCounter = lastInvoiceCounter + 1;

            // Format the counter with leading zeros (e.g., 0001)
            const formattedCounter = ('0000' + newInvoiceCounter).slice(-4);

            const {order_id,invoice_no,invoice_prefix,no_invoice,no_faktur,mall_id	
                ,mall_id_rajong	
                ,berattotal	
                ,awb	
                ,subtotal	
                ,ongkoskirim	
                ,freeongkir	
                ,subtotal_final	
                ,store_id	
                ,store_name	
                ,store_url	
                ,customer_id	
                ,customer_group_id	
                ,firstname	
                ,lastname	
                ,email	
                ,telephone	
                ,fax	
                ,payment_id	
                ,payment_firstname,payment_lastname,payment_telephone,payment_company,payment_company_id,payment_tax_id,payment_address_1,payment_address_2,payment_city,payment_postcode,payment_country,payment_country_id,payment_zone,payment_zone_id,payment_address_format,payment_method,payment_code,shipping_id,shipping_firstname,shipping_lastname,shipping_company,shipping_address_1,shipping_address_2,shipping_city,shipping_postcode,shipping_country,shipping_country_id,shipping_zone,shipping_zone_id,shipping_address_format,shipping_method,shipping_code,shipping_kurir,shipping_kurir_type,comment,catatan_penjual	
                ,total_kupon	
                ,total	
                ,order_status_id	
                ,order_baca_id	
                ,withdraw_status	
                ,affiliate_id	
                ,commission	
                ,language_id	
                ,currency_id	
                ,currency_code	
                ,currency_value	
                ,ip	
                ,forwarded_ip	
                ,user_agent	
                ,accept_language	
                ,date_invoice	
                ,date_added	
                ,date_modified	
                ,konfirm_bayar	
                ,perangkat	
                ,source	} = req.body
            if(clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                const setOrder = await order.create({
                    order_id : order_id,
                    invoice_no : `${year}${month}${day}${formattedCounter}`,
                    invoice_prefix : invoice_prefix,
                    no_invoice : no_invoice,
                    no_faktur : no_faktur,
                    mall_id	: mall_id,
                    mall_id_rajong : mall_id_rajong, 
                    berattotal	: berattotal,
                    awb	: awb,
                    subtotal : subtotal,
                    ongkoskirim	: ongkoskirim,
                    freeongkir : freeongkir,
                    subtotal_final	: subtotal_final,
                    store_id : store_id,
                    store_name	: store_name,
                    store_url : store_url,
                    customer_id	: customer_id,
                    customer_group_id : customer_group_id,
                    firstname : firstname,
                    lastname : lastname,
                    email : email,
                    telephone : telephone, 
                    fax	: fax,
                    payment_id	: payment_id,
                    payment_firstname : payment_firstname,
                    payment_lastname : payment_lastname,
                    payment_telephone : payment_telephone,
                    payment_company	: payment_company,
                    payment_company_id	: payment_company_id,
                    payment_tax_id	: payment_tax_id,
                    payment_address_1 : payment_address_1,
                    payment_address_2 : payment_address_2,
                    payment_city : payment_city,
                    payment_postcode : payment_postcode,
                    payment_country	: payment_country,
                    payment_country_id	: payment_country_id,
                    payment_zone : payment_zone,
                    payment_zone_id	:payment_zone_id,
                    payment_address_format	: payment_address_format,
                    payment_method	: payment_method,
                    payment_code : payment_code,
                    shipping_id	: shipping_id,
                    shipping_firstname	: shipping_firstname,
                    shipping_lastname : shipping_lastname,
                    shipping_company : shipping_company,
                    shipping_address_1	: shipping_address_1,
                    shipping_address_2	:shipping_address_2,
                    shipping_city : shipping_city,
                    shipping_postcode : shipping_postcode,
                    shipping_country : shipping_country,
                    shipping_country_id	: shipping_country_id,
                    shipping_zone : shipping_zone,
                    shipping_zone_id : shipping_zone_id,
                    shipping_address_format	: shipping_address_format,
                    shipping_method	: shipping_method,
                    shipping_code : shipping_code,
                    shipping_kurir	: shipping_kurir,
                    shipping_kurir_type	: shipping_kurir_type,
                    comment	: comment,
                    catatan_penjual	: catatan_penjual,
                    total_kupon	:total_kupon,
                    total : total,
                    order_status_id	: order_status_id,
                    order_baca_id	: order_baca_id,
                    withdraw_status	 : withdraw_status,
                    affiliate_id : affiliate_id,
                    commission	: commission,
                    language_id	: language_id,
                    currency_id	 : currency_id,
                    currency_code : currency_code,
                    currency_value	: currency_value,
                    ip	: ip,
                    forwarded_ip : forwarded_ip,
                    user_agent : user_agent,
                    accept_language	: accept_language,
                    date_invoice : date_invoice,
                    date_added : new Date(),
                    date_modified : date_modified,
                    konfirm_bayar : konfirm_bayar,
                    source	: source,
                    perangkat : perangkat
                });
    
                if (setOrder) {
                    let orderProduct;
                    let createOrderTotal;
                    const newOrderId = setOrder.order_id;

                    // Menggunakan req.body.products
                    for (const product of req.body.products) {
                        const {
                            product_id,
                            variation_id,
                            mall_id,
                            id_variasi,
                            name,
                            model,
                            quantity,
                            price,
                            diskon,
                            total,
                            tax,
                            reward,
                            elib_borrowed_at,
                            elib_expired_at,
                            elib_created_at
                        } = product;

                        const productData = await db_product.findByPk(product_id);
                        if (productData) {
                            const updatedQuantity = productData.quantity - quantity;
                            await db_product.update({ quantity: updatedQuantity }, { where: { product_id } });
                        }

                        // Sisipkan setiap produk ke dalam order_product
                        orderProduct = await order_product.create({
                            order_id: newOrderId,
                            product_id: product_id,
                            variation_id: variation_id,
                            mall_id: mall_id,
                            id_variasi: id_variasi,
                            invoice_prefix: req.body.invoice_prefix,
                            name: name,
                            model: model,
                            quantity: quantity,
                            price: price,
                            diskon: diskon,
                            total: total,
                            tax: tax,
                            reward: reward,
                            elib_borrowed_at: elib_borrowed_at,
                            elib_expired_at: elib_expired_at,
                            elib_created_at: elib_created_at,
                        });
                    }

                    for (const orderTotal of req.body.orderTotalEntries ) {
                        const {code,title,text,value,sort_order} = orderTotal;
                        createOrderTotal = await order_total.create({
                            order_id: newOrderId,
                            code: code,
                            title: title,
                            text: text,
                            value: value,
                            sort_order: sort_order
                        })
                    }

                    const orderHistory = await order_history.create({
                        order_id: newOrderId,
                        order_status_id	: req.body.order_status_id,
                        notify: req.body.notify,
                        awb: req.body.awb,
                        invoice_prefix: req.body.invoice_prefix,
                        comment: req.body.comment,
                        date_added: new Date()
                    })

                    setTimeout(async () => {
                        // const oneMinuteAgo = new Date();
                        // oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1);
                    
                        // const orderToNotify = await order.findOne({
                        //     where: {
                        //         order_id: setOrder.order_id,
                        //         date_added: {
                        //             $lt: oneMinuteAgo,
                        //         },
                        //     },
                        // });
                    
                        // if (orderToNotify) {
                            await db_notification.create({
                                user_id : customer_id,
                                invoice_no	: `${year}${month}${day}${formattedCounter}`,
                                judul_notif	 : "Pesanan Kedaluarsa",
                                isi_notif : "Kedaluarsa",
                                tgl_added :	new Date(),
                                dibaca : "0",
                                jenis :	"order",
                                variasi : "E"
                            });
                        // }
                    }, 2000);

                    if (orderProduct && createOrderTotal && orderHistory) {
                        output = {
                            status: {
                                code: 200,
                                message: 'Sukses Tambah Ke Order',
                                idOrder : setOrder.order_id
                            },
                        };
                    }

                    
                }
            } else {
                output = {
                    status : {
                        code : 401,
                        message : 'Data tidak dapat diakses karena token tidak valid'
                    }
                }
            }
        }
    } catch (error) {
        output = {
            status: {
                code: 500,
                message: error.message
            }
        }
    }

    if (!errorsFromMiddleware) {
        res.status(output.status.code).send(output);
    } else {
        res.status(errorsFromMiddleware.status.code).send(errorsFromMiddleware);
    }
};

exports.mitrans = async(req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);

    try {
        if (!errorsFromMiddleware) {
            let snap = new midtransClient.Snap({
                isProduction: true,
                serverKey: `Mid-server-cZfFQcM-7EN0CgeFCk42UQiw`,
                clientKey: `Mid-client-iS2ydMsFEsJ1M7q_`
            });
            
                let parameter = {
                    "transaction_details": {
                        "order_id": req.body.order_id,
                        "gross_amount": req.body.subtotal_final
                    }, 
                    "credit_card": {
                        "secure": true
                    }
                };
            
                snap.createTransaction(parameter)
                .then(async (transaction) => {
                    let transactionToken = transaction.token;
                    // console.log('transactionToken:', transactionToken);
                    
                    const updateOrder = await order.update(
                        {
                            token_mitrans: transactionToken
                        },
                        {
                        where : {
                            order_id : req.body.order_id
                        }
                    })

                    if(updateOrder){
                        output = {
                            status: {
                                code: 200,
                                message: 'Berhasil Mitrans'
                            },
                            data : transactionToken
                        }
                    }

                    
            })
        }
    } catch (error) {
        output = {
            status: {
                code: 500,
                message: error.message
            }
        }
    }

    if (!errorsFromMiddleware) {
        res.status(output.status.code).send(output);
    } else {
        res.status(errorsFromMiddleware.status.code).send(errorsFromMiddleware);
    }
}