const express = require("express");
const router = express.Router();
let User = require("../models/user_model");

router.route("/").post((req, res) => {
  console.log("request <--" + req.body);
  const username = req.body.username;
  const password = req.body.password;
  const new_user = new User({
    username,
    password
  });
  new_user
    .save()
    .then(() => res.json("User added!"))
    .catch(err => console.log("Error: " + err));
});

module.exports = router;
