-- CreateTable
CREATE TABLE "featured_x_company" (
    "id" SERIAL NOT NULL,
    "featured_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "featured_x_company_pkey" PRIMARY KEY ("id")
);
