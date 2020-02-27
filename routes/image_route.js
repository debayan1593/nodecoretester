const express = require("express");
const router = express.Router();
const ImageModel = require("../models/image");

router.route("/").post((req, res) => {
  const id = req.body.identifier;
  const base64 = req.body.imgBase64;
  const imageModel = new ImageModel({
    identifier: id,
    imgBase64: base64
  });
  imageModel
    .save()
    .then(() => res.json("Image saved!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:identifier").get((req, res) => {
  ImageModel.find({ identifier: req.params.identifier }, (err, image) => {
    if (err) res.status(400).json("Error: " + err);
    if (image) res.json(image);
  });
});
module.exports = router;
