const mongoose = require("mongoose");

const officerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
    },
    username:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        minlength: 12,
        maxlength: 12
    },
    password: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    thana_id: {
        type: Number,
        required: true
    }
});

const Officers = new mongoose.model("Officer", officerSchema);
module.exports = Officers;