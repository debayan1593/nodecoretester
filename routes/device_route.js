const express = require("express");
const router = express.Router();
const Devices = require("../models/devices");

router.route("/").get((req, res) => {
  Devices.find()
    .then(devices => res.json(devices))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const device_name = req.body.name;
  const device_imei = req.body.imei;
  const new_device = new Device({
    imei: device_imei,
    name: device_name
  });
  new_device
    .save()
    .then(() => res.json("Device added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:imei").get((req, res) => {
  Devices.find({ imei: req.params.imei }, (err, device) => {
    if (err) res.status(400).json("Error: " + err);
    if (device) {
      if (device.length === 0) {
        res.json("Sorry no devices found!");
      } else {
        res.json("Devices found: " + device.length);
      }
    }
  });
});

module.exports = router;
