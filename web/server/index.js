const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const socket = require("socket.io");
const authRoutes = require('./routes/auth.js');
const detectRoutes = require('./routes/detect.js');
const alertRoutes = require('./routes/alert.js');
const messageRoutes = require('./routes/messages.js');
const {dbconnect} = require("./config/database.js");
const PoliceStation = require("./models/station.js");
const Message = require("./models/messages.js");
const user = require("./models/user.js");
const Panic = require("./models/panic.js");
const http = require("http");
const server = http.createServer(app);
const cron = require('node-cron');
const {getAlerts} = require("./controllers/alerts.js");
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(
    cors({
        origin: "*",
        credentials: true
    })
)

app.use("/api/v1/", authRoutes);
app.use("/api/v1/", detectRoutes);
app.use("/api/v1/", alertRoutes);
app.use("/api/v1/", messageRoutes);

const io = socket(server, {
    cors: {
        origin: "*",
        methods: ["GET", "PUT", "POST", "DELETE", "PATCH"]
    }
})

dbconnect();

server.listen(PORT, ()=>{
    console.log(`APP IS RUNNING AT ${PORT}`);
})

io.on("connection", async(socket)=>{
    const socket_id = socket.id;
    
    const id = socket.handshake.query["station_id"];
    
    if(Boolean(id)){
        console.log("updating...");
        await PoliceStation.findByIdAndUpdate(id, {socket_id});
        console.log("updated");
    }

    console.log(`user connected ${socket_id}`);
    
    cron.schedule('0 * * * *', () => {
        console.log('Cron Job triggered');
        io.emit('locationRequest', { message: 'location update' });
    })

    socket.on("alertOfficers", async(data)=>{
        const {user_id, longitude, latitude} = data; 
        try {
            const nearestStation = await PoliceStation.findOne({
              location: {
                $near: {
                  $geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude] 
                  }
                }
              }
            });
        
            const panicSignal = await Panic.create({
                user: user_id,
                longitude,
                latitude
            });

            nearestStation.alerts.push(panicSignal._id)

            await nearestStation.save();
            
            const populatedStation = await PoliceStation.findById(nearestStation._id).populate("alerts");

            if (nearestStation.socket_id) {
              io.to(nearestStation.socket_id).emit("updateAlerts", {
                alerts: populatedStation.alerts,
              });
            }
        
        } catch (error) {
            console.error("Error finding nearest police station:", error);
        }
    });
    socket.on("messageOfficers", async(data)=>{
        const {user_id, longitude, latitude, text} = data;

        const newMessage = await OfficerMessages.create({
            user: user_id, 
            text: text,
            longitude: longitude,
            latitude: latitude,
            officerOriginated: false, 
        });

        io.broadcast.emit("newMessage", newMessage);
    });
    socket.on("messageByOfficers", async(data)=>{
        const {user_id, longitude, latitude, text} = data;

        const newMessage = await Message.create({
            user: user_id, 
            text: text,
            longitude: longitude,
            latitude: latitude,
            officerOriginated: true, 
        });

        console.log(newMessage);
        
        const _user = await user.findById(user_id);
        _user.messages.push(newMessage._id); 
        await _user.save();
        
        io.emit("newMessage", newMessage);

        // find socket id of the user and emit an event to it.
    });

})