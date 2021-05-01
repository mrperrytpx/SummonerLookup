// NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require('dotenv').config();

//  Import Routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const User = require("./model/User");

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
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

//Route middlewares
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.post("/refresh_token", async (req, res) => {
  const token = req.cookies.slup;
  
  if (!token) {
    return res.send({ ok: false, accessToken: "" });
  }

  let payload = null;
  try {
    payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return res.send({ ok: false, accessToken: "" });
  }
  console.log(payload)

  const user = await User.findOne({_id: payload._id});
  if (!user) {
    return res.send({ ok: false, accessToken: "" });
  }

  const newToken = jwt.sign({_id: user._id}, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d"
  });

  return res.send({ ok: true, accessToken: newToken });
})

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});