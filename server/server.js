// NPM Packages
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const api = require("./api");
const { defaultErrorHandler, errorHandler } = require("./handlers/");
const connectToMongoAtlas = require("./utils/connectToMongoAtlas");

// Initialize express
const app = express();

// Connect with Mongo Atlas
connectToMongoAtlas();

app.use((req, _res, next) => {
    console.log(req.url);
    next();
});

// Middlewares
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SIGNATURE));
app.use(express.json());
app.use(cors({ origin: process.env.WEBSITE_URL, credentials: true }));

// API
app.use("/api", api);

// app.use(defaultErrorHandler);
app.use(errorHandler);

module.exports = app;