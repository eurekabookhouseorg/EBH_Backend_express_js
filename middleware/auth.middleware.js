const core = require('../config/core')
const {sequelize, DataTypes} = require("../connection/conn");
const db_customer = require("../models/db_customer");
const customers = db_customer(sequelize, DataTypes);
const { check } = require('express-validator')
const db = require('../config/config')


exports.validate = (method) => {

    switch (method) {
        case 'login': {
            return [
                check('email', 'Email Tidak Valid')
                    .not().isEmpty()
                    .withMessage(`Email Tidak Boleh Kosong`)
                    .normalizeEmail()
                    .isEmail().withMessage('Format Email Salah'),
                check('password')
                    .not().isEmpty()
                    .withMessage(`Password Tidak Boleh Kosong`).custom(async (pass, { req }) => {
                        const { email, password } = req.body

                        let query = await db.query(`SELECT * FROM db_customer WHERE LOWER(email) = '${email}'  AND password = SHA1(CONCAT(salt, SHA1(CONCAT(salt, SHA1('${password}'))))) AND status = '1'`)

                        const validate = Boolean(query.length)

                        if (!validate) {
                            throw new SyntaxError('Email Atau Password Salah')
                        }
                    }),


            ]
        }
    }
}