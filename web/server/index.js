const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const socket = require("socket.io");
const authRoutes = require('./routes/auth.js');
const {dbconnect} = require("./config/database.js");

const http = require("http");
const server = http.createServer(app);

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
    console.log(`user connected ${socket_id}`);
})