-- CreateTable
CREATE TABLE "Deleveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Deleveryman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deleveryman_username_key" ON "Deleveryman"("username");
