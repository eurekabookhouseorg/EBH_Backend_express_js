const { sequelize, DataTypes } = require('../connection/conn');
const  db_manufacturer= require('../models/db_manufacturer');
const manufacturer = db_manufacturer(sequelize, DataTypes);

exports.getManufacturer = async(req, res) => {
    try {
        const dataManufacturer = await manufacturer.findAll();

        if(dataManufacturer.length > 0) {
            const mappedData = dataManufacturer.map(manufactur => ({
                manufacturer_id : manufactur.manufacturer_id,
                name : manufactur.name,
                slug : manufactur.slug,
                image : manufactur.image,
                description : manufactur.description,
                email : manufactur.email,
                status : manufactur.status
            }))
          res.status(200).json({
            status: {
              code : 200,
              message: 'Data berhasil diambil',
            },
            data: {order : mappedData},
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'Data tidak ditemukan',
            data: null
          });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
        status: 'error',
        message: 'Terjadi kesalahan saat mengambil data',
        data: null
        });
    }
}