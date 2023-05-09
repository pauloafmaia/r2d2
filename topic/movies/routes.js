const controller = require("./controller");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const schemas = require("./schemas");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

/* GET METHODS */

router.get("/movies", async (req, res) => {
  const movies = await controller.getAllMovies();

  if (movies.length > 0) {
    res.send(movies);
  } else {
    res.status(404).send("Movies not found");
  }
});

router.get("/movies/:id", async (req, res) => {
  const movie = await controller.getMovieById(req.params.id);

  if (!movie) {
    res.status(404).send("Movie not found");
  } else {
    res.send(movie);
  }
});

router.get("/movies/orderbyname", async (req, res) => {
  const movies = await controller.getMoviesOrderByName();

  if (movies.length > 0) {
    res.send(movies);
  } else {
    res.status(404).send("Movie not found");
  }
});

router.get("/movies/orderbyyear", async (req, res) => {
  const movies = await controller.getMoviesOrderByYear();

  if (movies.length > 0) {
    res.send(movies);
  } else {
    res.status(404).send("Movie not found");
  }
});

router.get("/movies/orderbysequential", async (req, res) => {
  const movies = await controller.getMoviesOrderBySequential();

  if (movies.length > 0) {
    res.send(movies);
  } else {
    res.status(404).send("Movie not found");
  }
});

/* POST METHODS */

router.post("/movies", schemas.movieSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    const movie = await controller.createMovie(req.body);

    res.status(201).send(movie);
  }
});

/* PUT METHODS */

router.put("/movies/:id", schemas.movieSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    await controller.updateMovie(req.body, req.params.id);
    const movies = await controller.getAllMovies();
    res.status(200).send(movies);
  }
});

/* DELETE METHODS */

router.delete("/movies/:id", async (req, res) => {
  await controller.deleteMovie(req.params.id);

  const movies = await controller.getAllMovies();

  res.status(200).send(movies);
});

module.exports = router;
