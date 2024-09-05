const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
    otp: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 6
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
    expiresAt: {
        type: Date,
        default: Date.now() + 300000 
    }
});

module.exports = mongoose.model("OtpSchema")