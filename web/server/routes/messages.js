const express = require('express');
const router = express.Router();
const Messages = require('../models/messages'); 
const mongoose = require("mongoose");
router.get('/messages/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const messages = await Messages.find({ user: new mongoose.Types.ObjectId(userId)})
        
        console.log(messages);

        if (!messages || messages.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No messages found for this user',
            });
        }

        return res.status(200).json({
            success: true,
            data: messages,
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