const station = require("../models/station");
exports.getAlerts = async(data)=>{
    const {station_id} = data;
    try{
        const stationData = await station.findOne({id:station_id});
        return stationData.alerts;
    } catch(err){
        console.log(err);
    }
}