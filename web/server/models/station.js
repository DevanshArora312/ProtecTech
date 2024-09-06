const mongoose = require("mongoose");

const PoliceStationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
    },
    alerts : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Panic'
    }]
});

const PoliceStation = new mongoose.model("PiliceStation", PoliceStationSchema);
module.exports = PoliceStation;