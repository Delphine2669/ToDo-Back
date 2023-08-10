/*
  Warnings:

  - Made the column `genre` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `releaseYear` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `director` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `streamingService` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notableActors` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seasons` on table `TvShow` required. This step will fail if there are existing NULL values in that column.
  - Made the column `releaseYear` on table `TvShow` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notableActors` on table `TvShow` required. This step will fail if there are existing NULL values in that column.
  - Made the column `genre` on table `TvShow` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Movie` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `genre` VARCHAR(191) NOT NULL,
    MODIFY `releaseYear` INTEGER NOT NULL,
    MODIFY `director` VARCHAR(191) NOT NULL,
    MODIFY `streamingService` VARCHAR(191) NOT NULL,
    MODIFY `notableActors` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `TvShow` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `seasons` INTEGER NOT NULL,
    MODIFY `releaseYear` INTEGER NOT NULL,
    MODIFY `notableActors` VARCHAR(191) NOT NULL,
    MODIFY `genre` VARCHAR(191) NOT NULL;
