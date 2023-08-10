-- CreateTable
CREATE TABLE Movie (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title TEXT NOT NULL,
  genre TEXT NULL,
  releaseYear INT  NULL,
  director TEXT  NULL,
  streamingService TEXT  NULL,
  notableActors TEXT NULL
);


-- CreateTable
CREATE TABLE TvShow (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title TEXT NOT NULL,
  seasons INT NULL,
  releaseYear INT NULL,
  notableActors TEXT NULL,
    streamingService TEXT  NULL,
  genre TEXT  NULL
);
