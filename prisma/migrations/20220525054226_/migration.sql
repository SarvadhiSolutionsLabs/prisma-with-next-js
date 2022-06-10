-- CreateTable
CREATE TABLE `Emp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(2000) NOT NULL,
    `profile` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `empId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_empId_fkey` FOREIGN KEY (`empId`) REFERENCES `Emp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
