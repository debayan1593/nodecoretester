const express = require("express");
//create an instance of the router
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

//create an instance of the app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const url = process.env.DB_HOST;
mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Mongo DB connection established successfully!");
});

connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error!")
);

//declare routes here
const user_route = require("./routes/user_route");
app.use("/createUser", user_route);

const handshake_route = require("./routes/handshake_route");
app.use("/nodeCore", handshake_route);

const device_route = require("./routes/device_route");
app.use("/devices", device_route);

const image_route = require("./routes/image_route");
app.use("/image", image_route);

const country_code_route = require("./routes/country_code_route");
app.use("/countrycodes", country_code_route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "192.168.0.154", () => {
  console.log(`Listening on port ${PORT}!`);
});
