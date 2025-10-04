// src/ingredients/dto/update-ingredients.dto.ts
// Para actualizar, extiendo del Create pero todos los campos se vuelven opcionales
import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientsDto } from './create-ingredients.dto';

export class UpdateIngredientsDto extends PartialType(CreateIngredientsDto) {}
