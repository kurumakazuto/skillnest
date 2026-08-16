/*
  Warnings:

  - You are about to drop the `ProjectLanguage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectTechStack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserQualification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSkill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `projectId` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Qualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `TechStack` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectLanguage` DROP FOREIGN KEY `ProjectLanguage_languageId_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectLanguage` DROP FOREIGN KEY `ProjectLanguage_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectTechStack` DROP FOREIGN KEY `ProjectTechStack_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectTechStack` DROP FOREIGN KEY `ProjectTechStack_techStackId_fkey`;

-- DropForeignKey
ALTER TABLE `UserQualification` DROP FOREIGN KEY `UserQualification_qualificationId_fkey`;

-- DropForeignKey
ALTER TABLE `UserQualification` DROP FOREIGN KEY `UserQualification_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UserSkill` DROP FOREIGN KEY `UserSkill_skillId_fkey`;

-- DropForeignKey
ALTER TABLE `UserSkill` DROP FOREIGN KEY `UserSkill_userId_fkey`;

-- DropIndex
DROP INDEX `Language_name_key` ON `Language`;

-- DropIndex
DROP INDEX `Project_userId_fkey` ON `Project`;

-- DropIndex
DROP INDEX `Qualification_name_key` ON `Qualification`;

-- DropIndex
DROP INDEX `Skill_name_key` ON `Skill`;

-- DropIndex
DROP INDEX `TechStack_name_key` ON `TechStack`;

-- AlterTable
ALTER TABLE `Language` ADD COLUMN `projectId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Qualification` ADD COLUMN `acquiredAt` DATETIME(3) NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Skill` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `TechStack` ADD COLUMN `projectId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `ProjectLanguage`;

-- DropTable
DROP TABLE `ProjectTechStack`;

-- DropTable
DROP TABLE `UserQualification`;

-- DropTable
DROP TABLE `UserSkill`;

-- CreateIndex
CREATE INDEX `Language_projectId_idx` ON `Language`(`projectId`);

-- CreateIndex
CREATE INDEX `Qualification_userId_idx` ON `Qualification`(`userId`);

-- CreateIndex
CREATE INDEX `Skill_userId_idx` ON `Skill`(`userId`);

-- CreateIndex
CREATE INDEX `TechStack_projectId_idx` ON `TechStack`(`projectId`);

-- AddForeignKey
ALTER TABLE `Qualification` ADD CONSTRAINT `Qualification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechStack` ADD CONSTRAINT `TechStack_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Language` ADD CONSTRAINT `Language_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
