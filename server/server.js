const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT ?? 3001;
const RIOT_API = process.env.RIOT_API;

const app = express();

app.get("/search/:summName/:server", (req, res) => {
    let name = req.params;
    console.log(name);
    // res.json(name);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});