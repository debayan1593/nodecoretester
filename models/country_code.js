const mongoose = require("mongoose");
const CountryCode = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dial_code: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("countryCode", CountryCode);
