import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) { }
  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  findAll(type?: number) {
    // TODO: Understand better how to implement JOINS using Prisma
    if (type) {
      return this.prisma.$queryRaw`
        SELECT company.* FROM company
        JOIN  featured_x_company ON featured_x_company.company_id = company.id 
        WHERE featured_x_company.featured_id = ${type}` as Promise<CreateCompanyDto[]>
    }
    return this.prisma.company.findMany({ orderBy: { id: 'asc' } });
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
