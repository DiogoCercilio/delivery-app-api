import { Module } from '@nestjs/common';
import { CompanyProductService } from './company_product.service';
import { CompanyProductController } from './company_product.controller';

@Module({
  controllers: [CompanyProductController],
  providers: [CompanyProductService]
})
export class CompanyProductModule {}
