/*
  Warnings:

  - Added the required column `topic` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tutorName` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "topic" TEXT NOT NULL,
ADD COLUMN     "tutorName" TEXT NOT NULL;
