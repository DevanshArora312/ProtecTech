const mongoose = require("mongoose");

const panicSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
});

const Panic = new mongoose.model("Panic", panicSchema);
module.exports = Panic;