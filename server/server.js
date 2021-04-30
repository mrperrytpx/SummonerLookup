// NPM Packages
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

//  Import Routes
const registerRoute = require("./routes/register");

// Environment variables
const PORT = process.env.PORT ?? 3001;
const MONGO_CONNECT = process.env.MONGO_CONNECT;

const app = express();

// Connect with Mongo Atlas
mongoose.connect(
  MONGO_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Cluster0")
);

// Middlewares
app.use(express.json());

//Route middlewares
app.use("/register", registerRoute);


// Start server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});