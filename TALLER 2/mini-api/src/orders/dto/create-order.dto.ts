import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  customer: string;

  @IsNumber()
  @IsPositive()
  total: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsArray()
  @IsString({ each: true }) // todos los items deben ser strings
  items: string[];

  @IsNumber()
  @IsPositive()
  waiterId: number;
}
