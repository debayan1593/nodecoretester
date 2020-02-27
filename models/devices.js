const mongoose = require("mongoose");
const device = mongoose.Schema({
  imei: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

var DeviceModel = mongoose.model("device", device);
module.exports = DeviceModel;
