// NPM Packages
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const { defaultErrorHandler, errorHandler, asyncHandler } = require("./utils/");

//  Import Routes - lmao 
const { registerRoute,
	loginRoute,
	freshTokensRoute,
	logoutRoute
} = require("./routes/auth/");

// const myProfileRoute = require("./routes/myProfile");
// const deleteUserRoute = require("./routes/deleteUser");
// const searchUserRoute = require("./routes/searchPlayers");
// const matchDetailsRouter = require("./routes/matchDetails");
// const addToFollowingRoute = require("./routes/addToFollowing");
// const isPlayerLiveRoute = require("./routes/isPlayerLive");
// const unfollowPlayerRouter = require("./routes/unfollowPlayer");

// Authorization middleware
const { authorizationMiddleware } = require("./utils/");

// Initialize express
const app = express();

// Connect with Mongo Atlas
mongoose.connect(
	process.env.MONGO_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => err ? console.log(err) : console.log("Connected to Cluster0")
);

// Middlewares
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SIGNATURE));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Route middlewares
app.use("/api/refresh_token", freshTokensRoute); // Refresh a token
app.use("/api/register", registerRoute); // Send info to make a new user in database
app.use("/api/login", loginRoute); // Check if user exists in the database
app.use("/api/logout", authorizationMiddleware, logoutRoute); // Delete a refresh token and clear the access token, has to be authorized with a proper access token 

// app.use("/api/match/", matchDetailsRouter); // Get metch details for a single game
// app.use("/api/me", authorizeMiddleware, myProfileRoute); // Get user info, has to be authorized with a proper access token 
// app.use("/api/delete_account", authorizeMiddleware, deleteUserRoute); // Delete a user from the database, has to be authorized with a proper access token 
// app.use("/api/add", authorizeMiddleware, addToFollowingRoute); // Add player to following list
// app.use("/api/live/", isPlayerLiveRoute); // Search for live game data
// app.use("/api/unfollow/", authorizeMiddleware, unfollowPlayerRouter); // Unfollow a player
// app.use("/api/", searchUserRoute); // Search for league of legends account info

app.use(defaultErrorHandler);
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT ?? 3001}`));