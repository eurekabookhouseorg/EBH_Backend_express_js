require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME,
    DB_NAME,
    DB_DIALECT,
} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Koneksi ke database berhasil!', DB_NAME);
        return true;
    } catch (error) {
        console.error('Tidak dapat terkoneksi ke database:', error);
        return false;
    }
}

module.exports = { testConnection, sequelize, DataTypes };