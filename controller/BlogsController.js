const { sequelize, DataTypes } = require('../connection/conn');
const  db_blogs= require('../models/db_blogs');
const blogs = db_blogs(sequelize, DataTypes);

exports.getBlogs = async (req, res) => {
    const dataBlogs = await blogs.findAll();
    res.send(dataBlogs);
}

exports.detailBlogs = async (req, res) => {
    try {
        const findId = req.body.id_blogs;
        const dataBlog = await blogs.findByPk(findId);
        res.send(dataBlog);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.updateBlogs = async (req, res) => {
    try {
        const findId = req.body.id_blogs;
        const updateBlogs = await blogs.findByPk(findId);
        updateBlogs.update(req.body);
        res.send(updateBlogs);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.addBlogs = async (req, res) => {
    try {
        const addBlog = await blogs.create(req.body);
        res.send(addBlog);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.deleteBlogs = async (req, res) => {
    try {
        const findId = req.body.id_blogs;
        const deleteBlog = await blogs.findByPk(findId);
        deleteBlog.destroy();
        res.send("Delete blog success");
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}