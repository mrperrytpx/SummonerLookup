const mongoose = require("mongoose");

const connectToMongoAtlas = () => {
    mongoose.connect(
        process.env.MONGO_CONNECT,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => err ? console.log(err) : console.log("Connected to Cluster0")
    );
};

module.exports = connectToMongoAtlas;