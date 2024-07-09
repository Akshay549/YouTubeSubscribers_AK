const express = require("express");
const app = require("./src/app.js");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 3000;

// const subscriberModel = require('./src/models/subscribers.js');

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE

const DATABASE_URL =
  "mongodb+srv://vishalwhis99:9pnpG1yj5yVQUb1X@cluster0.tenrr2s.mongodb.net/" ||
  "mongodb://127.0.0.1:27017/YoutubeData";
//const DATABASE_URL = process.env.MONGODB_URL_ATLAS || process.env.MONGODB_URL_LOCAL;

mongoose.connect(
  DATABASE_URL /*{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}*/
);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to database"));

//Import the router files
const subscribersRoute = require("./src/routes/subscribersRoute.js");
app.use("/subscribers", subscribersRoute);
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//Start Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`)
);
