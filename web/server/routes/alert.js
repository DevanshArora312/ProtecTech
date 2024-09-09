const express = require("express");
const router = express.Router();
const {getAlerts} = require('../controllers/alerts');

router.post("/alerts", getAlerts);

module.exports = router;