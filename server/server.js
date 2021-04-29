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

app.post("/register/", async (req, res) => {
  console.log(req.body);
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch(err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});