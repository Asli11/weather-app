const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.renderHomePage);

router.post("/", controller.getWeather);

module.exports = router;
