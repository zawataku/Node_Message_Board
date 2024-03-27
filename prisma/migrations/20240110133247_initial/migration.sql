/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Posts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "like" INTEGER NOT NULL
);
INSERT INTO "new_Posts" ("id", "like", "post", "username") SELECT "id", "like", "post", "username" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
