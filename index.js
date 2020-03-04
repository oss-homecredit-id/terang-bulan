const express = require("express");
const app = express();
const songsData = require("./songsData")
const albumsData = require("./albumsData")

app.get("/songs", (req, res) => {
    res.send(songsData);
})

app.get("/albums", (req, res) => {
    res.send(albumsData);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);