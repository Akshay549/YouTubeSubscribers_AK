const express = require("express");
const app = express();
const path = require("path");

//Middleware to parse JSON bodies
app.use(express.json());

// Display the written message on the homepage to the client.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

module.exports = app;
