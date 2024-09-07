const mongoose = require("mongoose");

const PoliceStationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
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
    address: String,
    socket_id: String,
    alerts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Panic'
    }]
});
  
PoliceStationSchema.index({ location: '2dsphere' });
  
module.exports = mongoose.model("PoliceStation", PoliceStationSchema);
  