// src/menu/dto/update-menu.dto.ts
// Para actualizar, extiendo del Create pero todos los campos se vuelven opcionales
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
