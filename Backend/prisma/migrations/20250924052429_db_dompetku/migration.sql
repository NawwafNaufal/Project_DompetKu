/*
  Warnings:

  - The values [INCOME,EXPENSE] on the enum `Transaction_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `transaction` MODIFY `type` ENUM('Income', 'Expense') NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('User', 'Admin') NOT NULL;
