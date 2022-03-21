/*
  Warnings:

  - Added the required column `pricePerLesson` to the `Tutor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN     "pricePerLesson" DECIMAL(65,30) NOT NULL;
