-- AlterTable
ALTER TABLE `Movie` MODIFY `genre` VARCHAR(191) NULL,
    MODIFY `releaseYear` INTEGER NULL,
    MODIFY `director` VARCHAR(191) NULL,
    MODIFY `streamingService` VARCHAR(191) NULL,
    MODIFY `notableActors` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `TvShow` MODIFY `seasons` INTEGER NULL,
    MODIFY `releaseYear` INTEGER NULL,
    MODIFY `notableActors` VARCHAR(191) NULL,
    MODIFY `streamingService` VARCHAR(191) NULL,
    MODIFY `genre` VARCHAR(191) NULL;
