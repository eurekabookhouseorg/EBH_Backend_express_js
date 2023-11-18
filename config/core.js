require('dotenv').config()
const core = {};
const CryptoJS = require("crypto-js")
core.jwt = require('jsonwebtoken')
core.axios = require("axios");

core.createSalt = (length = 9) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

core.encryptPasswordV1 = (password = null, salt = null) => {
    return CryptoJS.SHA1(salt + CryptoJS.SHA1(salt + CryptoJS.SHA1(password))).toString()
}

module.exports = core;