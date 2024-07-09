const mongoose = require('mongoose');

const GameCharacterSchema = mongoose.Schema(


    {

        name: {
            type: String,
            required: [true, "Enter game charcter name"]
        },
        quantity: {
            type: Number,
            require: [true, 'Please enter quantity'],
            default: 0
        },
        image: {
            type: String,
            required: [false, 'Enter the charadesign']
        },
        price: {
            type: Number,
            require: [true, 'Please enter the price of the Character'],
            default: 0
        }
    },
    {
        timestamps : true,
    }
);

const GameCharacter = mongoose.model('GameCharacter', GameCharacterSchema);

module.exports = GameCharacter;