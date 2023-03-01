const express = require("express");
const app = express();
const user = require("./Routes/userroute");

// changing data to json formate
app.use(express.json());

// api
app.use("/api/v1", user);

module.exports = app;
