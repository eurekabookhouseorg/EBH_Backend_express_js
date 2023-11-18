const {sequelize, DataTypes} = require("../connection/conn");
const db_slider = require("../models/db_slider");
const sliders = db_slider(sequelize, DataTypes);

exports.getSliders = async (req, res) => {
    try {
        const dataSliders = await sliders.findAll({
            where: {
                status: 1
            },
            order: [
                [sequelize.literal(`CONVERT(SUBSTRING(sort, 1), SIGNED)`, 'ASC')]
            ]
        });

        const filteredSliders = dataSliders.filter(slider => slider.sort !== 0);

        if (filteredSliders.length > 0) {
            res.status(200).json({
                status: {
                    code: 200,
                    message: 'Data Gambar berhasil diambil',
                },
                data: { order: filteredSliders },
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Data Gambar dengan sort yang bukan 0 tidak ditemukan',
                data: null
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil data Gambar',
            data: null
        });
    }
}
