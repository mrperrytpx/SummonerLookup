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
const searchUserRoute = require("./routes/searchPlayers");
const matchDetailsRouter = require("./routes/matchDetails");
const addToFollowingRoute = require("./routes/addToFollowing");

// Authorization middleware
const authorizeMiddleware = require("./tokens/authorizeMiddleware");

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
app.use("/api/is_logged_in", isLoggedInRoute); // Checks if the user is logged in
app.use("/api/register", registerRoute); // Send info to make a new user in database
app.use("/api/login", loginRoute); // Check if user exists in the database
app.use("/api/refresh_token", refreshTokenRoute); // Refresh a token
app.use("/api/", searchUserRoute); // Search for league of legends account info
app.use("/api/match", matchDetailsRouter); // Get metch details for a single game
app.use("/api/logout", authorizeMiddleware, logoutRoute); // Delete a refresh token and clear the access token, has to be authorized with a proper access token 
app.use("/api/me", authorizeMiddleware, myProfileRoute); // Get user info, has to be authorized with a proper access token 
app.use("/api/delete", authorizeMiddleware, deleteUserRoute); // Delete a user from the database, has to be authorized with a proper access token 
app.use("/api/add", authorizeMiddleware, addToFollowingRoute); // Add player to following list

// Start server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
