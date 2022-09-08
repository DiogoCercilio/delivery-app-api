// @Controller()
// export class RestaurantController {
//   constructor(private readonly restaurantService: RestaurantService) {}



//   @Post('restaurant')
//   restaurant(@Body() body: RestaurantCreateDto): Promise<Restaurant> {
//     return this.restaurantService.createRestaurant(body)
//   }

//   @Post('restaurant/:restaurantId/dishes')
//   restaurant_dishes(@Param('restaurantId') restaurantId, @Body() body: RestaurantDishesCreateDto): Promise<Restaurant> {
//     return this.restaurantService.createRestaurantDishes(restaurantId, body)
//   }
// }


import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll(@Query('type') type?: string): Promise<CreateCompanyDto[]> {
    return this.companyService.findAll(+type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
