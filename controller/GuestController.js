const { sequelize, DataTypes } = require('../connection/conn');
const  bk_guest= require('../models/bk_guest');
const guests = bk_guest(sequelize, DataTypes);

exports.getGuest = async (req, res) => {
    try {
        const data = await guests.findAll()
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.findGuest = async(req, res) => {
    try {
        const id = req.params.id;
        const findGuest = await guests.findByPk(id);

        res.send(findGuest)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await guests.findByPk(id);

        await deleteUser.destroy();

        res.send("Delete Success")
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}