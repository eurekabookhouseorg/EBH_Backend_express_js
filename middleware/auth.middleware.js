// const core = require('../config/core')
const {sequelize, DataTypes} = require("../connection/conn");
const db_customer = require("../models/db_customer");
const customers = db_customer(sequelize, DataTypes);
const { check } = require('express-validator')
// const db = require('../config/config')
const bcrypt = require('bcrypt');


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

                        const user = await customers.findOne({
                            where: {
                                email: email,
                                status: '1', // Assuming status is a column in your db_customer table
                            },
                        });

                        if (!user) {
                            throw new SyntaxError('Email Atau Password Salah');
                        }

                        // Compare the provided password with the hashed password stored in the database
                        const passwordMatch = await bcrypt.compare(password, user.password);

                        if (!passwordMatch) {
                            throw new SyntaxError('Email Atau Password Salah');
                        }
                    }),


            ]
        }
    }
}