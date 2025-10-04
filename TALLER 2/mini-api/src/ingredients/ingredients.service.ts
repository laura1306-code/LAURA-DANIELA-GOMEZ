import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientsDto } from './dto/create-ingredients.dto';
import { UpdateIngredientsDto } from './dto/update-ingredients.dto';

export interface Ingredients {
  id: number;
  name: string;
  supplier: string;
  stock: number;
}

@Injectable()
export class IngredientsService {
  private seq = 3;
  private ingredientes: Ingredients[] = [
    {id: 1, name: 'Tomate', supplier: 'Campo', stock: 150 },
    {id: 2, name: 'Harina de trigo', supplier: 'Molinos', stock: 80 },
    {id: 3, name: 'Queso mozzarella', supplier: 'Vaquita', stock: 40 }];

  findAll(): Ingredients[] {
    return this.ingredientes;
  }

  findOne(id: number) {
    const item = this.ingredientes.find((m) => m.id === id);
    if (!item) throw new NotFoundException('Ingredients item not found');
    return item;
  }

  // Crear un nuevo ingrediente a mi listado usando DTO
  create(dto: CreateIngredientsDto) {
    const ingrediente: Ingredients = { id: ++this.seq, ...dto };
    this.ingredientes.push(ingrediente);
    return ingrediente;
  }
  
    // Actualizando mi ingrediente exitente
    update(id: number, dto: UpdateIngredientsDto) {
      const item = this.findOne(id);
      Object.assign(item, dto); // mezclo lo nuevo con lo viejo
      return item;
    }
  
    // Elimino un ingrediente de mi listado
    remove(id: number) {
      const index = this.ingredientes.findIndex((m) => m.id === id);
      if (index === -1) throw new NotFoundException('Menu item not found');
      const deleted = this.ingredientes.splice(index, 1);
      return deleted[0];
    }
}
