const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/*router.route("/").get((req, res) => {
  mongoose.connection.db.collection("countrycodes", (err, collection) => {
    if (err) res.status(400).json("Error: " + err);
    if (collection)
      collection.find().toArray((err, codes) => {
        if (err) res.json("Could not find any records!");
        if (codes) res.json(codes);
      });
  });
});*/

router.route("/:limit").get((req, res) => {
  findDocuments("countrycodes", {}, parseInt(req.params.limit), (err, documents) => {
    if (err) res.json("Could not find any records!");
    if (documents) res.json(documents);
  });
});

function findDocuments(collection_name, query, mlimit, cb) {
  mongoose.connection.db.collection(collection_name, (err, collection) => {
    if (err) console.log("Error: " + err);
    if (collection)
      collection
        .find(query)
        .limit(mlimit)
        .toArray(cb);
  });
}

/*function query_callback(res, err, documents) {
  if (err) res.json("Could not find any records!");
  if (documents) res.json(documents);
}*/

module.exports = router;
