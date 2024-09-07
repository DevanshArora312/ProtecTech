const User = require("../models/user.js");

exports.detect = async(req, res)=>{
    try{
        const {distance, longitude, latitude} = req.body;

        if(!distance || !longitude || !latitude){
            return res.status(400).json({
                success: false,
                message: "Please provide all the required fields"
            })
        }
        const crowd = await User.find({
            location: {
              $near: {
                $geometry: {
                  type: "Point",
                  coordinates: [longitude, latitude] 
                },
                $maxDistance: distance*1000
              },
            }
        });

        return res.status(200).json({
            success: true,
            data: crowd
        })
    } catch(err){
        console.log(err.message);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}
