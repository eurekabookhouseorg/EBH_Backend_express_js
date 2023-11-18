const { sequelize, DataTypes } = require('../connection/conn');
const  db_banner= require('../models/db_banner');
const banner = db_banner(sequelize, DataTypes);

exports.getBanner = async (req,res) => {
    try {
        const dataBanner = await banner.findAll();
        res.send(dataBanner);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.addBanner = async (req, res) => {
    try {
        const addBanner = await banner.create(req.body);
        res.send(addBanner);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.updateBanner = async (req, res) => {
    try {
        const findId = req.body.benner_id;
        const updateBanner = await banner.findByPk(findId);
        updateBanner.update(req.body);
        res.send(updateBanner);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.deleteBanner = async (req, res) => {
    try {
        const findId = req.body.benner_id;
        const deleteBanner = await banner.findByPk(findId);
        deleteBanner.destroy();

        res.send("Delete Benner Success")
    } catch (error) {
        console.log(error);
        res.send(error)
    }

}