const express = require("express");
const mongoose = require("mongoose");

const movieController = require("./controllers/movies");
mongoose
  .connect("mongodb://localhost:27017/movie-booking", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
      res.send({ data: [] });
    });

    app.get("/movies", movieController.findMovies);

    app.post("/movies", movieController.createMovies);
    app.get("/searchmovies/:id", movieController.searchMovies);

    app.listen(8000, () => {
      console.log("Server has been started and running on port 8000");
    });
  })
  .catch(() => {
    console.log("unable to connect mongodb");
  });
