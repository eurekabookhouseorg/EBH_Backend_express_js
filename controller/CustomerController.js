const core = require('../config/core')
const {sequelize, DataTypes} = require("../connection/conn");
const db_customer = require("../models/db_customer");
const customers = db_customer(sequelize, DataTypes);
const customErrorMiddleware = require("../middleware/middleware.result")
const path = require('path');

exports.getCustomers = async (req, res) => {
    try {
        const data = await customers.findAll();
        res.json({data});
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.detailCustomer = async (req, res) => {
    try {
        const findId = req.query.customer_id;
        const data = await customers.findByPk(findId);
        res
        .status(200)
        .json({data});
    } catch (error) {
        console.log(error);
        res
        .status(400)
        .send(error)
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const findId = req.body.customer_id;
        const data = await customers.findByPk(findId);

        req.body.date_added = new Date();
        req.body.last_login = new Date();
        data.update(req.body)
        res
        .status(200)
        .json({data});
    } catch (error) {
        console.log(error);
        res
        .status(400)
        .send(error)
    }
}

exports.register = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req)
    try {
        if (!errorsFromMiddleware) {

            const existUser = await customers.findOne(
                {
                    where: {
                        email: req.body.email
                    }
                }
            )

            if (!existUser) {
                const createUser = await customers.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    password: req.body.password,
                    credential: null,
                    telephone: null,
                    fax: null,
                    id_role: 0,
                    is_elibyu: 0,
                    salt: core.createSalt(),
                    email: req.body.email,
                    phone: req.body.phone,
                    cart: "a:0:{}",
                    wishlist: null,
                    newsletter: 1,
                    address_id: 0,
                    customer_group_id: 1,
                    ip: "static",
                    status: 1,
                    approved: 1,
                    avatar: null,
                    token: null,
                    date_added: Date.now(),
                    last_login: Date.now(),
                    device: "web",
                    group_id: 2,
                    is_elibu: 0

                })
                if (createUser) {
                    // await customers.update(
                    //     {
                    //         password: core.encryptPasswordV1(req.body.password, createUser.salt)
                    //     },
                    //     {
                    //         where: {
                    //             customer_id: createUser.customer_id

                    //         }
                    //     }
                    // )
                    output = {
                        status: {
                            code: 200,
                            message: "Regristation Succes"

                        }
                    }


                }
            }
            else {
                res.status(404).json({
                    status: 404,
                    message: 'Email User sudah Terdaftar',
                    data: null
                  });
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
        res.status(output.status.code).send(output)
    } else {
        res.status(errorsFromMiddleware.status.code).send(errorsFromMiddleware)
    }

}

exports.login = async (req, res) => {

    const errorsFromMiddleware = await customErrorMiddleware(req) // ini buat middleware nya, jadi 
    try {
        if (!errorsFromMiddleware) {
            const { email, password } = req.body;

            const user = await customers.findOne(
                {
                    where: {
                        email: email
                    }
                }
            )
            if (user) {

                if(password === user.password){
                    let payload = {
                        id: user.customer_id,
                        // token : token
    
                    };
                    const token = core.jwt.sign(payload, process.env.TOKEN_KEY, { expiresIn: "7d", });
                    const data = await customers.update(
                        {
                            token : token
                        },
                        {
                            where : {
                                email : req.body.email
                            },
                        }
                    );
    
                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Login Berhasil'
                        },
                        data: {
                            id_customer : user.customer_id,
                            token: token
                        }
                        // id: user.customer_id
                    });
                } else{
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'password tidak sesuai',
                        },
                    });
                }
            }
            else {
                output = {
                    status: {
                        code: 400,
                        message: 'Incorrect email & password'
                    }
                }
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

exports.editCustomer = async (req, res) => {
    const errorsFromMiddleware = await customErrorMiddleware(req);

    try {
        if (!errorsFromMiddleware) {
            const { customer_id, firstname, lastname, email, telephone } = req.body || {};
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
                    const normalizedPath = req.file ? req.file.path.split(path.sep).join('/') : null;
                    const updatedUser = await user.update({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        telephone: telephone,
                        avatar: normalizedPath
                    });

                    res.status(200).json({
                        status: {
                            code: 200,
                            message: 'Profil berhasil diperbarui'
                        },
                        data: {
                            data: updatedUser
                        }
                    });
                } else {
                    res.status(400).json({
                        status: {
                            code: 400,
                            message: 'Profil tidak ditemukan'
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
