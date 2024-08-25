const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = ()=>{
    mongoose.connect(process.env.DBurl)
    .then(()=>{
        console.log("Connected to Database");
    })
    .catch((err)=>{
        console.log("Failed to connect to Database");
        console.log(err);
        process.exit(1);
    })
}