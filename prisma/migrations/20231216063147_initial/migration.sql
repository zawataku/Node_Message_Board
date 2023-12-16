-- CreateTable
CREATE TABLE "Userdata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "pass" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Userdata_username_key" ON "Userdata"("username");
