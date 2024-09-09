const {detect} = require("../controllers/detect_threat.js");
const express = require("express");
const router = express.Router();

router.post("/detect", detect);

module.exports = router;