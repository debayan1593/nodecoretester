const express = require('express');
const router = express.Router();
const Device = require('../models/devices');

router.route('/').get((req, res)=>{
        Device.find
});

module.exports = router;