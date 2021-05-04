// NPM Packages
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//  Import Routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const refreshTokenRoute = require("./routes/refresh_tokens");
const myProfileRoute = require("./routes/myprofile");
const logoutRoute = require("./routes/logout");

// Authorization middleware
const authorize = require("./tokens/authorize");

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
app.use("/refresh_token", refreshTokenRoute)
app.use("/logout", authorize, logoutRoute);
app.use("/me", authorize, myProfileRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});