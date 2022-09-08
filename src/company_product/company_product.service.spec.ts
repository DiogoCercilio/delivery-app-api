import { Test, TestingModule } from '@nestjs/testing';
import { CompanyProductService } from './company_product.service';

describe('CompanyProductService', () => {
  let service: CompanyProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyProductService],
    }).compile();

    service = module.get<CompanyProductService>(CompanyProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
