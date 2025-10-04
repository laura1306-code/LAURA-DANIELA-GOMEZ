import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateWaiterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  shift: string;

  @IsNumber()
  @IsPositive()
  yearsExperience: number;
}
