const express = require('express');
const router = express.Router();
const miniQueryController = require("../controllers/index_controller")

router.get("/", miniQueryController.miniquery);

module.exports = router
