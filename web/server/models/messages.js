const mongoose = require("mongoose");

const OfficerMessagesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    text: {
        type: String,
    },
    longitude: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    officerOriginated: {
        type: Boolean,
        default: false
    }
});

const Messages = new mongoose.model("Messages", OfficerMessagesSchema);
module.exports = Messages;