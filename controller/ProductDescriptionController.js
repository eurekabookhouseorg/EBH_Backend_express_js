const { sequelize, DataTypes } = require('../connection/conn');
const  db_product_description= require('../models/db_product_description');
const product_desc = db_product_description(sequelize, DataTypes);

exports.getProductDesc = async (req, res)=>{
    try {
        const allData = await product_desc.findAll()
        res.send(allData)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.detailProductDesc = async (req, res)=>{
    try {
        const findId = req.body.product_id;
        const detailPD = await product_desc.findByPk(findId)
        res.send(detailPD)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.deleteProductDesc = async (req, res)=>{
    try {
        const findId = req.body.product_id;
        const deletePD = await product_desc.findByPk(findId)
        deletePD.destroy()
        res.send("Deleted Succes")
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.addProductDesc = async (req, res)=>{
    try {
        const addData = await product_desc.create(req.body)
        res.send(addData)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.updateProductDesc = async (req, res) => {
    try {
        const findId = req.body.product_id;
        const updatePD = await product_desc.findByPk(findId)
        updatePD.update(req.body)
        res.send(updatePD)

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}