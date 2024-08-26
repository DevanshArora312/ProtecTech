const mongoose = require("mongoose");

const sosSchema = new mongoose.model.Schema({
    sosid: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: String,
    }
});

module.exports = mongoose.model("sos", sosSchema);