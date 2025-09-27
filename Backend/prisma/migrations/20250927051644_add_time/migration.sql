/*
  Warnings:

  - Added the required column `expiredAt` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `refreshtoken` ADD COLUMN `expiredAt` DATETIME(3) NOT NULL;
