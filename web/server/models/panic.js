const mongoose = require("mongoose");

const panicSchema = new mongoose.model.Schema({
    panicId: {
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

module.exports = mongoose.model("panic", panicSchema);