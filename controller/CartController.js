    const {sequelize, DataTypes} = require("../connection/conn");
    const db_cart = require("../models/db_cart");
    const carts = db_cart(sequelize, DataTypes);

    const  db_product_model= require('../models/db_product');
    const db_product = db_product_model(sequelize, DataTypes);

    const  db_product_description_model= require('../models/db_product_description');
    const db_product_description = db_product_description_model(sequelize, DataTypes);

    const  db_product_category_model= require('../models/db_product_to_category');
    const db_product_category = db_product_category_model(sequelize, DataTypes);

    const  db_category_model= require('../models/db_category');
    const db_category = db_category_model(sequelize, DataTypes);
    
    const db_customer = require("../models/db_customer");
    const customers = db_customer(sequelize, DataTypes);

    const customErrorMiddleware = require("../middleware/middleware.result")

    exports.getCartTes = async (req, res) => {
        res.send("ini cartt")
    }

    exports.addToCart = async (req, res) => {
        const errorsFromMiddleware = await customErrorMiddleware(req);

        try {
            if (!errorsFromMiddleware) {
                const findId = req.body.customer_id;
                const data = await customers.findByPk(findId)

                const apiKey = data.token

                const clientApiKey = req.get('Authorization');
                if(clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                    const checkDataSama = await carts.findOne({
                        where: {
                            id_produk: req.body.id_produk,
                            id_customer: req.body.customer_id,
                        },
                    });
        
                    if (checkDataSama) {
                        const updateQty = checkDataSama.qty + req.body.qty;
                        await carts.update({qty : updateQty}, {
                            where : {
                                id_produk : req.body.id_produk,
                                id_customer : req.body.customer_id
                            }
                        })
                        output = {
                            status: {
                                code: 200,
                                message: 'Sukses Update Qty keranjang'
                            }
                        }
                    } else {
                        const setCart = await carts.create({
                            id_produk: req.body.id_produk,
                            id_customer: req.body.customer_id,
                            qty: req.body.qty,
                            date_add: new Date(),
                            token_session: "",
                            is_elibu: req.body.is_elibu,
                            is_checked: req.body.is_checked,
                        });
        
                        if (setCart) {
                            output = {
                                status: {
                                    code: 200,
                                    message: 'Sukses Tambah Ke Keranjang'
                                },
                            }
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

    // Tambahkan fungsi update is_checked
    exports.updateCart = async (req, res) => {
        const errorsFromMiddleware = await customErrorMiddleware(req);
    
        try {
            if (!errorsFromMiddleware) {
                const findId = req.body.customer_id;
                const data = await customers.findByPk(findId);
    
                const apiKey = data.token;
    
                const clientApiKey = req.get('Authorization');
                if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                    const existingCart = await carts.findOne({
                        where: {
                            id_cart: req.body.id_cart,
                            id_customer: req.body.customer_id,
                        },
                    });
    
                    if (existingCart) {
                        // Data sudah ada di keranjang, lakukan pembaruan pada qty dan is_checked
                        const updateQty = existingCart.qty + req.body.qty;
                        await carts.update(
                            { qty: updateQty, is_checked: req.body.is_checked },
                            {
                                where: {
                                    id_cart: req.body.id_cart,
                                    id_customer: req.body.customer_id,
                                },
                            }
                        );
    
                        output = {
                            status: {
                                code: 200,
                                message: 'Sukses Update Qty dan is_checked keranjang',
                            },
                        };
                    } else {
                        output = {
                            status: {
                                code: 404,
                                message: 'Data tidak ditemukan di keranjang',
                            },
                        };
                    }
                } else {
                    output = {
                        status: {
                            code: 401,
                            message: 'Data tidak dapat diakses karena token tidak valid',
                        },
                    };
                }
            }
        } catch (error) {
            output = {
                status: {
                    code: 500,
                    message: error.message,
                },
            };
        }
    
        if (!errorsFromMiddleware) {
            res.status(output.status.code).send(output);
        } else {
            res.status(errorsFromMiddleware.status.code).send(errorsFromMiddleware);
        }
    };
    
    exports.getCart = async (req, res) => {
    try {
        carts.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'id_produk' });
        carts.belongsTo(customers, { targetKey: 'customer_id', foreignKey: 'id_customer' });
        db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });

        const getCart = await carts.findAndCountAll (
            {
                where:{
                    id_customer: req.query.id_customer
                },
                include:[
                    {
                        model:db_product,
                        include:[
                            {
                                model:db_product_description
                            }
                        ]
                    },
                    {
                        model:customers
                    },
                ]
            }
        )
        if (getCart) {
            const groupedCart = {};

            getCart.rows.forEach((cart) => {
                const manufacturer = cart.db_product.manufacturer;
                if (!groupedCart[manufacturer]) {
                    groupedCart[manufacturer] = {
                        manufacturer: manufacturer,
                        manufacturer_id: cart.db_product.manufacturer_id,
                        products: [],
                    };
                }
                groupedCart[manufacturer].products.push({
                    id_cart: cart.id_cart,
                    id_produk: cart.id_produk,
                    id_customer: cart.id_customer,
                    nama_produk: cart.db_product.db_product_description ? cart.db_product.db_product_description.name : 'Tidak tersedia',
                    image: cart.db_product ? cart.db_product.image : 'Tidak tersedia',
                    qty: cart.qty,
                    stok: cart.db_product ? cart.db_product.quantity : 'Tidak tersedia',
                    price: cart.db_product ? cart.db_product.price : 'Tidak tersedia',
                    is_checked: cart.is_checked,
                });
            });

            const groupedCartArray = Object.values(groupedCart);

            res.status(200).json({
                status: {
                    code: 200,
                    message: "Data berhasil diambil"
                },
                data: {
                    groupedCart: groupedCartArray, // Data dikelompokkan berdasarkan manufacturer
                    originalData: getCart.rows
                }
            });
        }


    } catch (error) {
        res.status(500).send(error.message);
    }

    };

    exports.deleteCart = async (req, res) => {
        const errorsFromMiddleware = await customErrorMiddleware(req);
    
        try {
            if (!errorsFromMiddleware) {
                const findId = req.body.customer_id;
                const data = await customers.findByPk(findId)

                const apiKey = data.token
    
                const clientApiKey = req.get('Authorization');
                if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                    const itemToDelete = await carts.findOne({
                        where: {
                            id_cart: req.body.id_cart,
                        },
                    });
    
                    if (itemToDelete) {
                        const deletedItem = await carts.destroy({
                            where: {
                                id_cart: req.body.id_cart,
                            },
                        });
    
                        if (deletedItem) {
                            output = {
                                status: {
                                    code: 200,
                                    message: 'Produk berhasil dihapus dari keranjang'
                                }
                            }
                        } else {
                            output = {
                                status: {
                                    code: 500,
                                    message: 'Gagal menghapus produk dari keranjang'
                                }
                            }
                        }
                    } else {
                        output = {
                            status: {
                                code: 404,
                                message: 'Produk tidak ditemukan dalam keranjang'
                            }
                        }
                    }
                } else {
                    output = {
                        status: {
                            code: 401,
                            message: 'Data tidak dapat diakses karena token tidak valid'
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

    exports.deleteProductsByCustomerAndManufacturer = async (req, res) => {
        const customerId = req.body.customer_id; // ID customer yang ingin menghapus produknya
        const manufacturerId = req.body.manufacturer_id; // ID manufacturer yang ingin dihapus produknya
    
        try {
            carts.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'id_produk' });
            carts.belongsTo(customers, { targetKey: 'customer_id', foreignKey: 'id_customer' });
            // Cari semua produk yang dimiliki oleh customer dengan id_customer tertentu dan juga memiliki manufacturer_id yang sesuai
            const productsToDelete = await carts.findAll({
                where: {
                    id_customer: customerId,
                },
                include: [
                    {
                        model: db_product,
                        where: {
                            manufacturer_id: manufacturerId,
                        },
                    },
                ],
            });
    
            if (productsToDelete.length > 0) {
                // Hapus semua produk dengan id_customer dan manufacturer_id yang sesuai
                const deleteResults = await Promise.all(
                    productsToDelete.map(async (product) => {
                        return carts.destroy({
                            where: {
                                id_cart: product.id_cart,
                            },
                        });
                    })
                );
    
                // Periksa apakah setiap produk berhasil dihapus
                const successfullyDeleted = deleteResults.every((result) => result > 0);
    
                if (successfullyDeleted) {
                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Produk berhasil dihapus'
                        }
                    });
                } else {
                    res.status(500).json({
                        status: {
                            code: 500,
                            message: 'Gagal menghapus produk'
                        }
                    });
                }
            } else {
                res.status(404).json({
                    status: {
                        code: 404,
                        message: 'Tidak ada produk yang ditemukan dengan id_customer dan manufacturer_id tersebut'
                    }
                });
            }
        } catch (error) {
            res.status(500).json({
                status: {
                    code: 500,
                    message: error.message
                }
            });
        }
    };
    
    exports.getCartWithNotification = async (req, res) => {
        try {
            carts.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'id_produk' });
            carts.belongsTo(customers, { targetKey: 'customer_id', foreignKey: 'id_customer' });
            db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    
            const getCart = await carts.findAndCountAll(
                {
                    where: {
                        id_customer: req.query.id_customer
                    },
                    include: [
                        {
                            model: db_product
                        },
                        {
                            model: customers
                        },
                    ]
                }
            )
    
            if (getCart) {
                let totalQty = 0;
                getCart.rows.forEach((cart) => {
                    totalQty += cart.qty;
                });
    
                res.status(200).json({
                    status: {
                        code: 200,
                        message: "Data berhasil diambil"
                    },
                    data: {
                        totalItems : totalQty
                    }
                });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    
    exports.detailHarga = async (req, res) => {
        try {
            carts.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'id_produk' });
            carts.belongsTo(customers, { targetKey: 'customer_id', foreignKey: 'id_customer' });
            db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
    
            const getCart = await carts.findAll (
                {
                    where:{
                        id_customer: req.query.id_customer,
                        is_checked : true
                    },
                    include:[
                        {
                            model:db_product,
                            include:[
                                {
                                    model:db_product_description
                                }
                            ]
                        }
                    ]
                }
            )
            if (getCart) {
                let totalAllProduct = 0
                const mappedProducts = getCart.map(cart => {
                    const productPrice = parseFloat(cart.db_product.price);
                    const totalHarga = cart.qty*productPrice;
                    totalAllProduct += totalHarga;
                    return {
                        nama_produk: cart.db_product.db_product_description ? cart.db_product.db_product_description.name : 'Tidak tersedia',
                        qty : cart.qty,
                        price : cart.db_product ? cart.db_product.price : 'Price Tidak Tersedia',
                        totalHarga : totalHarga,
                        is_checked : cart.is_checked
                    }
                    
                })
                res.status(200).json({
                    status: {
                        code: 200,
                        message: "Data berhasil diambil"
                    },
                    data: {
                        Order : mappedProducts,
                        totalAllProduct : totalAllProduct
                    }
                });
            }
    
    
        } catch (error) {
            res.status(500).send(error.message);
        }
    
    };

    exports.checkoutProduct = async (req, res) => {
        const errorsFromMiddleware = await customErrorMiddleware(req);

        try {
            if (!errorsFromMiddleware) {
                const findId = req.body.customer_id;
                const data = await customers.findByPk(findId)

                const apiKey = data.token

                const clientApiKey = req.get('Authorization');

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
                    const setCart = await carts.create({
                        order_id : order_id,
                        invoice_no : invoice_no,
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
                        date_added : date_added,
                        date_modified : date_modified,
                        konfirm_bayar : konfirm_bayar,
                        perangkat : perangkat,
                        source	: source,
                    });
        
                    if (setCart) {
                        output = {
                            status: {
                                code: 200,
                                message: 'Sukses Tambah Ke Keranjang'
                            },
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