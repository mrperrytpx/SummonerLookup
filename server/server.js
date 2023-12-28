// NPM Packages
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const api = require("./api");
const { defaultErrorHandler, errorHandler } = require("./handlers/");
const connectToMongoAtlas = require("./utils/connectToMongoAtlas");
const swaggerDocs = require("./utils/swagger");

// Initialize express
const app = express();

connectToMongoAtlas();

app.get("/", (_req, res) => {
    res.sendStatus(200);
});

swaggerDocs(app, process.env.PORT);

// Middlewares
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SIGNATURE));
app.use(express.json());
app.use(cors({ origin: process.env.WEBSITE_URL, credentials: true }));

app.use((req, _res, next) => {
    console.log(req.url);
    next();
});

app.use("/static", express.static(__dirname + "/public"));
app.use("/api", api);

app.use(defaultErrorHandler);
app.use(errorHandler);

module.exports = app;
