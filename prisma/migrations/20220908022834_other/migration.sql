-- DropForeignKey
ALTER TABLE "company_products" DROP CONSTRAINT "company_products_company_id_fkey";

-- AddForeignKey
ALTER TABLE "company_products" ADD CONSTRAINT "company_products_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
