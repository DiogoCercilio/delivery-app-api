import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
    @IsNotEmpty()
    imgUrl: string
  
    @IsNotEmpty()
    title: string
  
    @IsNotEmpty()
    rating: string
  
    @IsNotEmpty()
    genre: string
  
    @IsNotEmpty()
    address: string
  
    @IsNotEmpty()
    short_description: string
  
    @IsNotEmpty()
    long: string
  
    @IsNotEmpty()
    lat: string
}



// export class RestaurantDishesDto {
//   @IsNotEmpty()
//   restaurant_id: number

//   @IsNotEmpty()
//   name: string

//   @IsNotEmpty()
//   description: string

//   @IsNotEmpty()
//   price: number

//   @IsNotEmpty()
//   image: string
// }


// export class RestaurantDishesCreateDto {
//   restaurant_id?: number
  
//   @IsNotEmpty()
//   name: string

//   @IsNotEmpty()
//   description: string
  
//   @IsNotEmpty()
//   price: string

//   @IsNotEmpty()
//   image: string
// }