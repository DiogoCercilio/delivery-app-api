import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyProductDto } from './dto/create-company_product.dto';
import { UpdateCompanyProductDto } from './dto/update-company_product.dto';

@Injectable()
export class CompanyProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCompanyProductDto: CreateCompanyProductDto) {
    return 'This action adds a new companyProduct';
  }

  findAll(companyId: number) {
    return this.prisma.company_Product.findMany({
      where: {
        company_id: companyId   
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} companyProduct`;
  }

  update(id: number, updateCompanyProductDto: UpdateCompanyProductDto) {
    return `This action updates a #${id} companyProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyProduct`;
  }
}
