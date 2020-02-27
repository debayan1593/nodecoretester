const mongoose = require("mongoose");
const ImageModel = mongoose.Schema({
  identifier: {
    type: String,
    required: true
  },
  imgBase64: {
    type: String,
    required: true      
  }
});

module.exports = mongoose.model("image", ImageModel);
