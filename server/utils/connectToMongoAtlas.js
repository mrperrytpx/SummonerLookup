const mongoose = require("mongoose");

const connectToMongoAtlas = () => {
    mongoose
        .connect(process.env.MONGO_CONNECT, {})
        .then(() => console.log("Connected to Cluster0"));
};

module.exports = connectToMongoAtlas;
