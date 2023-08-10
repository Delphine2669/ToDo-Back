import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const movieData: Prisma.MovieCreateInput[] = [
  {
    title: "Example Movie 1",
    genre: "Action",
    releaseYear: 2022,
    director: "John Director",
    streamingService: "Example Streaming",
    notableActors: "Actor A, Actor B",
  },
  // Add more movie data here...
];

const tvShowData: Prisma.TvShowCreateInput[] = [
  {
    title: "Example TV Show 1",
    seasons: 3,
    releaseYear: 2020,
    notableActors: "Actor X, Actor Y",
    genre: "Drama",
  },
  // Add more TV show data here...
];

async function main() {
  console.log(`Start seeding ...`);

  for (const movie of movieData) {
    const createdMovie = await prisma.movie.create({
      data: movie,
    });
    console.log(`Created movie with id: ${createdMovie.id}`);
  }

  for (const tvShow of tvShowData) {
    const createdTvShow = await prisma.tvShow.create({
      data: tvShow,
    });
    console.log(`Created TV show with id: ${createdTvShow.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
