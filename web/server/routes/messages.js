const express = require('express');
const router = express.Router();
const Messages = require('../models/messages'); 
const User = require('../models/user'); 
const mongoose = require("mongoose");
router.get('/messages/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate("messages").exec();
        
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "something went wrong",
            });
        }

        return res.status(200).json({
            success: true,
            data: user.messages,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the messages',
        });
    }
});

module.exports = router;