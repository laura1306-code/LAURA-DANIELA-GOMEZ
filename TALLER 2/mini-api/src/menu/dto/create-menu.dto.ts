// src/menu/dto/create-menu.dto.ts
// Este DTO define qué datos necesito para crear un plato en el menú
// Uso class-validator para validar que los campos sean correctos
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString() // debe ser texto
  @IsNotEmpty() // no puede venir vacío
  name: string;

  @IsNumber() // debe ser número
  @IsPositive() // tiene que ser mayor que 0
  price: number;

  @IsString()
  @IsNotEmpty()
  category: string;
}
