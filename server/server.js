// NPM Packages
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const api = require("./api");
const { defaultErrorHandler, errorHandler } = require("./utils/");

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
app.use(cors({ origin: process.env.WEBSITE_URL, credentials: true }));

// API
app.use("/api", api);

app.use(defaultErrorHandler);
app.use(errorHandler);

module.exports = app;