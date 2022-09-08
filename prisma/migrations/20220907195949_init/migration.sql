-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "lat" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_dishes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "company_dishes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company_dishes" ADD CONSTRAINT "company_dishes_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
