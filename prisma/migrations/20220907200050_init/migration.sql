/*
  Warnings:

  - You are about to drop the `company_dishes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company_dishes" DROP CONSTRAINT "company_dishes_company_id_fkey";

-- DropTable
DROP TABLE "company_dishes";

-- CreateTable
CREATE TABLE "company_products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "company_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company_products" ADD CONSTRAINT "company_products_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
