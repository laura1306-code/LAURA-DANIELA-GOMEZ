// src/ingredients/dto/create-ingredients.dto.ts
// Este DTO define qué datos necesito para crear un ingrediente
// Uso class-validator para validar que los campos sean correctos
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateIngredientsDto {
  @IsString() // debe ser texto
  @IsNotEmpty() // no puede venir vacío
  name: string;

  @IsString() 
  @IsNotEmpty() 
  supplier: string;

  @IsNumber()// debe ser número
  @IsPositive() // tiene que ser mayor que 0
  stock: number;
}