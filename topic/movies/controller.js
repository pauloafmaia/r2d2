const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET METHODS */

const getAllMovies = async () => {
  const movies = await prisma.movie.findMany();
  return movies;
};

const getMovieById = async (id) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id: id,
    },
  });
  return movie;
};

const getMoviesOrderByName = async (type) => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      name: type,
    },
  });
  return movies;
};

const getMoviesOrderByYear = async (type) => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      year: type,
    },
  });
  return movies;
};

const getMoviesOrderBySequential = async (type) => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      sequential: type,
    },
  });
  return movies;
};

/* POST METHODS */

const createMovie = async (movie) => {
  return await prisma.movie.create({
    data: movie,
  });
};

/* UPDATE METHODS */

const updateMovie = async (movie, id) => {
  await prisma.movie.update({
    where: {
      id: id,
    },
    data: movie,
  });
};

/* DELETE METHODS */

const deleteMovie = async (id) => {
  await prisma.movie.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesOrderByName,
  getMoviesOrderByYear,
  getMoviesOrderBySequential,
  createMovie,
  updateMovie,
  deleteMovie,
};
