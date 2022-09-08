import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyService } from 'src/company/company.service';
import { CompanyController } from 'src/company/company.controller';
import { CompanyProductController } from 'src/company_product/company_product.controller';
import { CompanyProductService } from 'src/company_product/company_product.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryController } from 'src/category/category.controller';
import { FeaturedService } from 'src/featured/featured.service';
import { FeaturedController } from 'src/featured/featured.controller';

@Module({
  controllers: [AppController, CompanyController, CompanyProductController, CategoryController, FeaturedController],
  providers: [AppService, PrismaService, CompanyService, CompanyProductService, CategoryService, FeaturedService],
})
export class AppModule {}
