const { sequelize, DataTypes } = require('../connection/conn');
const customErrorMiddleware = require("../middleware/middleware.result");

const  db_country= require('../models/db_country');
const countries = db_country(sequelize, DataTypes);

const  ro_province= require('../models/ro_province');
const province = ro_province(sequelize, DataTypes);

const  db_city= require('../models/db_city');
const city = db_city(sequelize, DataTypes);

const  db_zone= require('../models/db_zone');
const zone = db_zone(sequelize, DataTypes);

const  db_shipping= require('../models/db_shipping');
const shipping = db_shipping(sequelize, DataTypes);

const db_customer = require("../models/db_customer");
const customers = db_customer(sequelize, DataTypes);

const db_cart = require("../models/db_cart");
const carts = db_cart(sequelize, DataTypes);

const  db_product_model= require('../models/db_product');
const db_product = db_product_model(sequelize, DataTypes);

const  db_ro_province = require('../models/ro_province');
const roProvince = db_ro_province(sequelize, DataTypes);

const  ro_city = require('../models/ro_city');
const roCity = ro_city(sequelize, DataTypes);

const  ro_subdistrict = require('../models/ro_subdistrict');
const roSubdistrict = ro_subdistrict(sequelize, DataTypes);

const  db_product_description_model= require('../models/db_product_description');
const { body } = require('express-validator');
const db_product_description = db_product_description_model(sequelize, DataTypes);

const core = require('../config/core')

exports.getCountries = async (req, res) => {
    try {
        const dataCountries = await countries.findAll();

        if (dataCountries.length > 0) {
            res.status(200).json({
                status: {
                    code: 200,
                    message: 'Data Country berhasil diambil',
                },
                data: { order: dataCountries },
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Data Country dengan sort yang bukan 0 tidak ditemukan',
                data: null
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil data Country',
            data: null
        });
    }
}

exports.getProvince = async (req, res) => {
    try {
        const dataProvince = await province.findAll();

        if (dataProvince.length > 0) {
            res.status(200).json({
                status: {
                    code: 200,
                    message: 'Data Province berhasil diambil',
                },
                data: { order: dataProvince },
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Data Province dengan sort yang bukan 0 tidak ditemukan',
                data: null
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil data Province',
            data: null
        });
    }
}

exports.getCity = async (req, res) => {
    try {
        city.belongsTo(zone, {targetKey : 'zone_id', foreignKey : 'zone_id'});
        zone.belongsTo(countries, {targetKey : 'country_id', foreignKey : 'country_id'});
        const dataCity = await city.findAll({
            include : [
                {
                    model : zone,
                    include : [
                        {
                            model : countries
                        }
                    ]
                }
            ]
        });

        if (dataCity.length > 0) {
            res.status(200).json({
                status: {
                    code: 200,
                    message: 'Data city berhasil diambil',
                },
                data: { order: dataCity },
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Data city dengan sort yang bukan 0 tidak ditemukan',
                data: null
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil data city',
            data: null
        });
    }
}

exports.createAlamat = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req); // Ini buat middleware nya, jadi
    try {
        if (!errorsFromMiddleware) {
            const {	id_rajaongkir , customer_id, firstname, lastname, telephone, company_id, company, tax_id, address_1, address_2, country_id, country, province_id, province, city_id	, city , zone_id, zone_1, zone_2, postcode, location, status } = req.body;

            const data = await customers.findByPk(customer_id);

            // Periksa token pelanggan yang dikirim oleh klien
            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                // Temukan pelanggan berdasarkan customer_id
                const user = await customers.findOne({
                    where: {
                        customer_id: customer_id
                    }
                });

                if (user) {
                    // Lakukan pembaruan profil pelanggan menggunakan metode update
                    const createAlamat = await shipping.create({
                        id_rajaongkir : id_rajaongkir,
                        customer_id : customer_id, 
                        firstname : firstname, 
                        lastname : lastname,
                        telephone : telephone,  
                        address_2 : address_2, 
                        country_id : country_id, 
                        country : country, 
                        province_id : province_id,
                        province : province, 
                        city_id	: city_id, 
                        city : city, 
                        zone_id : zone_id, 
                        zone_1 : zone_1, 
                        postcode : postcode, 
                        status : status
                    });

                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Alamat Berhasil ditambahkan'
                        },
                        data: {
                            data: createAlamat
                        }
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'User tidak ditemukan'
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

exports.editAlamat = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req); // Ini buat middleware nya, jadi
    try {
        if (!errorsFromMiddleware) {
            const {	id_rajaongkir , customer_id, firstname, lastname, telephone, company_id, company, tax_id, address_1, address_2, country_id, country, province_id, province, city_id	, city , zone_id, zone_1, zone_2, postcode, location, status } = req.body;

            const data = await customers.findByPk(customer_id);

            // Periksa token pelanggan yang dikirim oleh klien
            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                // Temukan pelanggan berdasarkan customer_id
                const user = await customers.findOne({
                    where: {
                        customer_id: customer_id
                    }
                });

                if (user) {
                    const alamatId = req.body.address_id;
                    const findAddressId = await shipping.findOne({
                        where : {
                            address_id : alamatId
                        }
                    });
                    
                    if(findAddressId){
                        const updateAlamat = await shipping.update({
                            id_rajaongkir : id_rajaongkir,
                            customer_id : customer_id, 
                            firstname : firstname, 
                            lastname : lastname,
                            telephone : telephone,  
                            address_2 : address_2, 
                            country_id : country_id, 
                            country : country, 
                            province_id : province_id,
                            province : province, 
                            city_id	: city_id, 
                            city : city, 
                            zone_id : zone_id, 
                            zone_1 : zone_1, 
                            postcode : postcode, 
                            status : status
    
                        }, {
                            where : {
                                address_id : alamatId
                            }
                        });

                        if(updateAlamat){
                            res.status(200).json({
                                status: {
                                    code: 200,
                                    message: 'Alamat Berhasil diupdate'
                                }
                            });
                        }else{
                            res.status(400).json({
                                status: {
                                    code: 400,
                                    message: 'Gagal mengupdate alamat'
                                }
                            });
                        }
                    }else{
                        res.status(400).json({
                            status: {
                                code: 400,
                                message: 'id Alamat tidak ditemukan'
                            }
                        });
                    }
                    
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'User tidak ditemukan'
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

exports.deleteAlamat = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req); // Ini buat middleware nya, jadi

    try {
        if (!errorsFromMiddleware) {
            const { customer_id, address_id } = req.body;

            const data = await customers.findByPk(customer_id);

            // Periksa token pelanggan yang dikirim oleh klien
            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                // Cari alamat berdasarkan customer_id dan address_id
                const findAddress = await shipping.findOne({
                    where: {
                        address_id: address_id
                    }
                });

                if (findAddress) {
                    // Hapus alamat
                    await shipping.destroy({
                        where: {
                            address_id: address_id
                        }
                    });

                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Alamat berhasil dihapus'
                        }
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'Alamat tidak ditemukan'
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
        }
    } catch (error) {
        res.status(500).json({
            status: {
                code: 500,
                message: error.message,
            },
        });
    }
};

exports.getAlamat = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);

    try {
        if (!errorsFromMiddleware) {
            const { customer_id } = req.query;

            const data = await customers.findByPk(customer_id);

            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                const findAddress = await shipping.findAll({
                    where: {
                        customer_id: customer_id
                    }
                });

                if (findAddress) {

                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Alamat berhasil ditemukan'
                        },
                        data : findAddress
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'Alamat tidak ditemukan'
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
        }
    } catch (error) {
        res.status(500).json({
            status: {
                code: 500,
                message: error.message,
            },
        });
    }
};

exports.getZone = async (req, res) => {
    try {
        zone.belongsTo(city, { targetKey: 'zone_id', foreignKey: 'zone_id' });
        zone.belongsTo(countries, { targetKey: 'country_id', foreignKey: 'country_id' });
        const dataZone = await zone.findAll({
            include: [
                {
                    model: city
                },
                {
                    model: countries
                }
            ]
        });

        if (dataZone.length > 0) {
            // Langkah 1: Buat objek untuk mengelompokkan berdasarkan "db_country name"
            const groupedData = {};
            dataZone.forEach((zone) => {
                if (zone.db_country && zone.db_country.name) {
                    const countryId = zone.db_country.country_id;
                    const countryName = zone.db_country.name;
                    const cityName = zone.name;

                    if (!groupedData[countryName]) {
                        groupedData[countryName] = {
                            country_id: countryId,
                            name: countryName,
                            cities: {}
                        };
                    }

                    if (!groupedData[countryName].cities[cityName]) {
                        groupedData[countryName].cities[cityName] = [];
                    }

                    groupedData[countryName].cities[cityName].push({
                        zone_id: zone.zone_id,
                        country_id: zone.country_id,
                        city_id: zone.db_city.city_id, // Include city_id
                        name: zone.name,
                        code: zone.code,
                        status: zone.status,
                        db_city: zone.db_city
                    });
                }
            });

            res.status(200).json({
                status: {
                    code: 200,
                    message: 'Data Zone berhasil diambil',
                },
                data: groupedData,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Data Zone dengan sort yang bukan 0 tidak ditemukan',
                data: null
            });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil data Zone',
            data: null
        });
    }
}

exports.getProvince = async (req, res) => {
    try {
        roSubdistrict.belongsTo(roProvince, { targetKey: 'province_id', foreignKey: 'province_id' });
        roSubdistrict.belongsTo(roCity, { targetKey: 'city_id', foreignKey: 'city_id' });
        const data = await roSubdistrict.findAll({
            include: [
                {
                    model: roProvince
                },
                {
                    model: roCity
                }
            ],
            order: [
                [roProvince, 'province_id', 'ASC']
            ]
        });

        if (data.length > 0) {
            // Langkah 1: Buat objek untuk mengelompokkan berdasarkan "db_country name"
            const groupedData = {};
            data.forEach((zone) => {
                const provinceId = zone.province_id;
                const provinceName = zone.province;
                const cityName = zone.ro_city.city_name;
            
                if (!groupedData[provinceName]) {
                    groupedData[provinceName] = {
                        province_id: provinceId,
                        name: provinceName,
                        cities: {},
                    };
                }
            
                if (!groupedData[provinceName].cities[cityName]) {
                    groupedData[provinceName].cities[cityName] = [];
                }
            
                groupedData[provinceName].cities[cityName].push({
                    province_id: zone.province_id,
                    city_id: zone.city_id,
                    subdistrict_id: zone.subdistrict_id,
                    type: zone.type,
                    subdistrict: zone.subdistrict,
                    status: zone.status,
                    city_name: zone.ro_city.city_name,
                    ro_city: {
                        city_id: zone.ro_city.city_id,
                        province_id: zone.ro_city.province_id,
                        province: zone.ro_city.province,
                        city_name: zone.ro_city.city_name,
                        postal_code: zone.ro_city.postal_code,
                        type: zone.ro_city.type,
                        subdistrict_id: zone.subdistrict_id,
                        subdistrict: zone.subdistrict,
                    },
                });
            });
            

            res.status(200).json({
                status: {
                    code: 200,
                    message: 'Data Zone berhasil diambil',
                },
                data: groupedData,
                originalData : data
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Data Zone dengan sort yang bukan 0 tidak ditemukan',
                data: null
            });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil data Zone',
            data: null
        });
    }
}

exports.detailCheckout = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);

    try {
        if (!errorsFromMiddleware) {
            const { customer_id } = req.query;
            carts.belongsTo(db_product, { targetKey: 'product_id', foreignKey: 'id_produk' });
            carts.belongsTo(customers, { targetKey: 'customer_id', foreignKey: 'id_customer' });
            db_product.belongsTo(db_product_description, { targetKey: 'product_id', foreignKey: 'product_id' });
            shipping.belongsTo(roCity, {targetKey : 'city_id', foreignKey : 'city_id'});

            const data = await customers.findByPk(customer_id);

            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                const findAddress = await shipping.findAll({
                    // include : [
                    //     {
                    //         model : city
                    //     }
                    // ],
                    where: {
                        customer_id: customer_id,
                        status : true
                    }
                });

                // get data product
                const getCart = await carts.findAndCountAll({
                    where: {
                        id_customer: customer_id,
                        is_checked: true
                    },
                    include: [
                        {
                            model: db_product,
                            include: [
                                {
                                    model: db_product_description
                                }
                            ]
                        },
                        {
                            model: customers
                        },
                    ]
                });
                
                if (findAddress && getCart) {
                    const groupedCart = {};
                    let totalSemuaPeroduct = 0
                    let totalWeight = 0
                
                    getCart.rows.forEach((cart) => {
                        const manufacturer = cart.db_product.manufacturer;
                        if (!groupedCart[manufacturer]) {
                            groupedCart[manufacturer] = {
                                manufacturer: manufacturer,
                                manufacturer_id: cart.db_product.manufacturer_id,
                                products: [],
                            };
                        }
                        const productPrice = parseFloat(cart.db_product.price); // Konversi harga ke tipe data float
                        const totalHarga = productPrice * cart.qty; // Hitung total harga
                        const parseWeight = parseFloat(cart.db_product.weight);
                        totalWeight += parseWeight;
                        totalSemuaPeroduct += totalHarga
                        groupedCart[manufacturer].products.push({
                            id_cart: cart.id_cart,
                            id_produk: cart.id_produk,
                            id_customer: cart.id_customer,
                            nama_produk: cart.db_product.db_product_description ? cart.db_product.db_product_description.name : 'Tidak tersedia',
                            image: cart.db_product ? cart.db_product.image : 'Tidak tersedia',
                            qty: cart.qty,
                            stok: cart.db_product ? cart.db_product.quantity : 'Tidak tersedia',
                            price: productPrice, // Gunakan harga dari produk, bukan dari keranjang
                            total_harga: totalHarga, // Tambahkan total harga ke respons
                            is_checked: cart.is_checked,
                            weight: cart.db_product ? cart.db_product.weight : 'Tidak tersedia',
                        });
                    });
                
                    const groupedCartArray = Object.values(groupedCart);

                    const total = {
                        totalHarga : totalSemuaPeroduct,
                        totalWeight : totalWeight * 1000
                    }
                
                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'detail order berhasil ditemukan'
                        },
                        data: [
                            { shipping: findAddress },
                            { products: groupedCartArray },
                            { total : total }
                        ]
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'detail order tidak ditemukan'
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

exports.alamatFavorite = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);
    try {
        if (!errorsFromMiddleware) {
            const { customer_id, address_id, status } = req.body;

            const data = await customers.findByPk(customer_id);

            const apiKey = data.token;
            const clientApiKey = req.get('Authorization');

            if (clientApiKey && clientApiKey === `Bearer ${apiKey}`) {
                const user = await customers.findOne({
                    where: {
                        customer_id: customer_id
                    }
                });

                if (user) {
                    const findAddressId = await shipping.findOne({
                        where: {
                            address_id: address_id
                        }
                    });

                    if (findAddressId) {
                        // Update status alamat lainnya menjadi 0
                        await shipping.update(
                            { status: 0 },
                            {
                                where: {
                                    customer_id: customer_id,
                                    status: 1 // Hanya yang memiliki status 1 yang akan diubah
                                }
                            }
                        );

                        // Update status alamat yang dipilih
                        const updateAlamat = await shipping.update(
                            { status: status },
                            {
                                where: {
                                    address_id: address_id
                                }
                            }
                        );

                        if (updateAlamat) {
                            res.status(200).json({
                                status: {
                                    code: 200,
                                    message: 'Berhasil Menambahkan alamat Fav'
                                }
                            });
                        } else {
                            res.status(400).json({
                                status: {
                                    code: 400,
                                    message: 'Gagal menambahkan alamat Fav'
                                }
                            });
                        }
                    } else {
                        res.status(400).json({
                            status: {
                                code: 400,
                                message: 'id Alamat tidak ditemukan'
                            }
                        });
                    }

                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'User tidak ditemukan'
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
        }
    } catch (error) {
        res.status(500).json({
            status: {
                code: 500,
                message: error.message,
            },
        });
    }
};

exports.cekHarga = async (req, res) => {
    try {
        let data = JSON.stringify({
            "muat": req.body.muat,
            "bongkar": req.body.bongkar,
            "berat": req.body.berat
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://apirace.eurekalogistics.co.id/price/get-cost',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          core.axios.request(config)
          .then((response) => {
            res.status(200).json({
                status: {
                    code: 200,
                    message: 'berhasil',
                },
                asal : response.data.asal,
                bongkar : response.data.bongkar,
                selectPrice : response.data.selectPrice,
            });
          })
          .catch((error) => {
            res.status(400).json({
                status: {
                    code: 400,
                    data : error.message,
                    message: 'gagal'
                }
            });
          });
    } catch (error) {
        res.status(500).json({
            status: {
                code: 500,
                message: error
            }
        });
    }
}