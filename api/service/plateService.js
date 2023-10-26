const Plate = require('../models/Plate')

exports.createPlate = async (plateData) => {
    const plate = new Plate(plateData)
    return await plate.save()
}

exports.getAllPlates = async () => {
    return await Plate.find()
}

exports.getPlateById = async (id) => {
    return await Plate.findById(id);
};

exports.updatePlate = async (id, plateData) => {
    return await Plate.findByIdAndUpdate(id, plateData, { new: true });
};

exports.deletePlate = async (id) => {
    return await Plate.findByIdAndRemove(id);
};