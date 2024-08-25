const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const {dbconnect} = require("./config/database.js");

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(
    cors({
        origin: "*",
        credentials: true
    })
)

dbconnect();

app.listen(PORT, ()=>{
    console.log(`APP IS RUNNING AT ${PORT}`);
})
