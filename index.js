const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const songsData = require("./songsData");
const albumsData = require("./albumsData");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const isValidData = (data, type) => {
  let isValid =
    data !== null &&
    data !== "null" &&
    data !== "" &&
    data !== undefined &&
    data !== "undefined";

  if (type) {
    const isValidType = typeof data === type;
    isValid = isValid && isValidType;
  }

  return isValid;
};

const isValidAlbum = (title, album) => {
  const songs = songsData.data;
  let albumId = songs.find(item => item.title === title);
  if (albumId) {
    albumId = albumId.albumId;
    const albums = albumsData.data;
    const album = albumsData.find(item => item.id === albumId);
    if (album && album.album === album) return true;
  }

  return false;
};

app.get("/songs", (req, res) => {
  res.send(songsData);
});

app.get("/albums", (req, res) => {
  res.send(albumsData);
});

/*
    post playlist data example
    {
      playlistName = "string",
      songs: [
        { title = "string",
          year = "number",
          singer = "string",
          album = "string",
          image = "string"
        }
      ]
    }
  */
app.post("/playlist", (req, res) => {
  try {
    const contentType = req.headers["content-type"];
    if (!contentType || contentType !== "application/json")
      throw "Unsopported Content Type";

    const { playlistName, songs } = req.body;

    if (!isValidData(playlistName)) throw "playlistName is mandatory";

    if (!isValidData(songs, "object") || !songs.length)
      throw "songs is mandatory or invalid songs datatype";

    songs.forEach(element => {
      const { title, year, singer, album, image } = element;
      if (!isValidData(title, "string"))
        throw "title is mandatory or invalid title data type";
      if (!isValidData(year, "number"))
        throw "year is mandatory or invalid year data type";
      if (!isValidData(singer, "string"))
        throw "singer is mandatory or invalid singer data type";
      if (!isValidData(album, "string"))
        throw "album is mandatory or invalid album data type";
      if (!isValidData(image, "string"))
        throw "image is mandatory or invalid image data type";
      if (!isValidAlbum(title, album))
        throw "title or album not found or title and album didnt match";
    });

    return res
      .status(200)
      .jsonp({ message: "Mantap gan!", data: { playlistName, songs } });
  } catch (error) {
    console.log(error);
    return res.status(400).jsonp({ message: error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
