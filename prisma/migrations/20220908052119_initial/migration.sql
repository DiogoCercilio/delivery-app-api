/*
  Warnings:

  - Added the required column `category_id` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
