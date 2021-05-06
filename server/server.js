// NPM Packages
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//  Import Routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const refreshTokenRoute = require("./routes/refreshTokens");
const myProfileRoute = require("./routes/myProfile");
const logoutRoute = require("./routes/logout");
const isLoggedInRoute = require("./routes/isLoggedIn");
const deleteUserRoute = require("./routes/deleteUser")

// Authorization middleware
const authorize = require("./tokens/authorize");

// Environment variables
const PORT = process.env.PORT ?? 3001;

// Initialize express
const app = express();

// Connect with Mongo Atlas
mongoose.connect(
  process.env.MONGO_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Cluster0")
);

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//Route middlewares
app.use("/is_logged_in", isLoggedInRoute); // Checks if the user is logged in
app.use("/register", registerRoute); // Send info to make a new user in database
app.use("/login", loginRoute); // Check if user exists in the database
app.use("/refresh_token", refreshTokenRoute); // Refresh a token
app.use("/logout", authorize, logoutRoute); // Delete a refresh token and clear the access token, has to be authorized with a proper access token 
app.use("/me", authorize, myProfileRoute); // Get user info, has to be authorized with a proper access token 
app.use("/delete", authorize, deleteUserRoute); // Delete a user from the database, has to be authorized with a proper access token 

// Start server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});