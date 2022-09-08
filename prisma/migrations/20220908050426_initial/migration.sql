-- CreateTable
CREATE TABLE "featured" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "featured_pkey" PRIMARY KEY ("id")
);
