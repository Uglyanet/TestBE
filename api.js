const express = require("express");
const router = express.Router();
const { films } = require('./router')

router.use('/films', films)

module.exports = router;