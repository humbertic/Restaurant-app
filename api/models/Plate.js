const mongoose = require('mongoose')

const platesShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }, 
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        ingredients: [String],
        imageUrl: String,
        createdDate: {
            type: Date,
            default: Date.now,
        }
    });

module.exports  = mongoose.model('plates', platesShema)