const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT ?? 3001;
const MONGO_CONNECT = process.env.MONGO_CONNECT;

const User = require("./model/User");

const app = express();

mongoose.connect(
  MONGO_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Cluster0")
);

app.use(express.json());

app.post("/search/:summName/:server", (req, res) => {
  let name = req.params;
  console.log(name);
  // res.json(name);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});