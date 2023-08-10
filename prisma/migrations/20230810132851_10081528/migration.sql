/*
  Warnings:

  - Made the column `streamingService` on table `TvShow` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `TvShow` MODIFY `streamingService` VARCHAR(191) NOT NULL;
