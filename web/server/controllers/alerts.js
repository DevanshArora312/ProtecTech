const station = require("../models/station");
exports.getAlerts = async(req, res)=>{
    const {station_id} = req.body;
    
    if(!station_id) return res.status(400).json({
        success: false,
        message: "Station ID is required"
    })

    try{
        const stationData = await station.findById(station_id)
        .populate({
            path: 'alerts',
            populate: {
                path: 'user',
                model: 'user'
            }
        })
        .exec();

        return res.status(200).json({
            success: true,
            alerts: stationData.alerts
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'alerts could not fetched'
        })
    }
}