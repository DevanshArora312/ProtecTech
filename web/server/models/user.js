const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        mobile: {
            type: String,
            required: true,
            minlength: 12,
            maxlength: 12
        },
        image: {
            type: String,
        },
        bookmarkedContact: {
            type: [String],
            minlength: 5
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: true
        },
        isEmployed:{
            type: Boolean,
            default: false
        },
        employer: {
            type: String
        },
        occupation: {
            type: String,
        },
        maritalStatus: {
            type: Boolean,
            default: false
        },
        criminalBackground: {
            type: Boolean,
            default: false
        },
        location: {
            type: {
                type: String, 
                enum: ['Point'], 
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Messages'
            }
        ]
    }
);

userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema);
module.exports = User;