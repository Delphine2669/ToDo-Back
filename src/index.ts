import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/movies", async (req, res) => {
  const {
    title,
    genre,
    releaseYear,
    director,
    streamingService,
    notableActors,
  } = req.body;
  const result = await prisma.movie.create({
    data: {
      title,
      genre,
      releaseYear,
      director,
      streamingService,
      notableActors,
    },
  });
  res.json(result);
});

app.delete("/tv-shows/:id", async (req, res) => {
  const tvShowId = parseInt(req.params.id);

  try {
    const tvShow = await prisma.tvShow.findUnique({
      where: { id: tvShowId },
    });

    if (!tvShow) {
      return res.status(404).json({ error: "TV show not found" });
    }

    await prisma.tvShow.delete({
      where: { id: tvShowId },
    });

    res.json({ message: "TV show deleted successfully" });
  } catch (error) {
    console.error("Error deleting TV show:", error);
    res.status(500).json({ error: "Error deleting TV show" });
  }
});

app.delete("/movies/:id", async (req, res) => {
  const movieId = parseInt(req.params.id);

  try {
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movie) {
      return res.status(404).json({ error: "movie not found" });
    }

    await prisma.movie.delete({
      where: { id: movieId },
    });

    res.json({ message: "movie  successfully deleted" });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: "Error deleting movie" });
  }
});

app.post("/tv-shows", async (req, res) => {
  const {
    title,
    seasons,
    releaseYear,
    notableActors,
    genre,
    streamingService,
  } = req.body;
  const result = await prisma.tvShow.create({
    data: {
      title,
      seasons,
      releaseYear,
      notableActors,
      genre,
      streamingService,
    },
  });
  res.json(result);
});

app.get("/movies", async (req, res) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

app.get("/tv-shows", async (req, res) => {
  const tvShows = await prisma.tvShow.findMany();
  res.json(tvShows);
});
app.put("/tv-shows/:id", async (req, res) => {
  const tvShowId = parseInt(req.params.id);
  const { field, value } = req.body;

  try {
    const tvShow = await prisma.tvShow.findUnique({
      where: { id: tvShowId },
    });

    if (!tvShow) {
      return res.status(404).json({ error: "TV show not found" });
    }
    const updatedTvShow = await prisma.tvShow.update({
      where: { id: tvShowId },
      data: {
        [field]: value,
      },
    });

    res.json(updatedTvShow);
  } catch (error) {
    console.error("Error updating TV show details:", error);
    res.status(500).json({ error: "Error updating TV show details" });
  }
});
app.put("/movies/:id", async (req, res) => {
  const movieId = parseInt(req.params.id);
  const { field, value } = req.body;

  try {
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movie) {
      return res.status(404).json({ error: "movie not found" });
    }
    const updatedMovie = await prisma.movie.update({
      where: { id: movieId },
      data: {
        [field]: value,
      },
    });

    res.json(updatedMovie);
  } catch (error) {
    console.error("Error updating movie details:", error);
    res.status(500).json({ error: "Error updating movie details" });
  }
});

const server = app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
