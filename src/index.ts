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

const server = app.listen(5000, () => {
  console.log("Server is running on port 3600");
});
