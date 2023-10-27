const Plate = require('../models/Plate')
const plateService = require('../service/plateService')

exports.createPlate = async (req, res) => {
    try {
        const plate = await plateService.createPlate(req.body)
        res.json(plate)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.getAllPlates = async (req, res) => {
    try {
        const plates = await plateService.getAllPlates()
        res.json(plates)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getPlateById = async (req, res) => {
    try {
        const plate = await plateService.getPlateById(req.params.id)
        if (!plate) {
            res.status(404).json({ error: 'Plate not Found' })
            return
        }
        res.json(plate)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updatePlate = async (req, res) => {
    try {
        const updatedPlate = await plateService.updatePlate(req.params.id, req.body)
        if (!updatedPlate) {
            res.status(404).json({ error: 'Plate not Found' })
            return
        }
        res.json(updatedPlate)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deletePlate = async (req, res) => {
    try {
        const deletedPlate = await plateService.deletePlate(req.params.id)
        if (!deletedPlate) {
            res.status(404).json({ error: 'Plate not Found' })
            return
        }
        res,json(deletedPlate)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}



