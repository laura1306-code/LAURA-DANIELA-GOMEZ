// src/menu/menu.service.ts
// Aquí está la lógica de negocio para manejar los datos del menú
// Por ahora todo es en memoria (un arreglo de objetos)

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable()
export class MenuService {
  private seq = 3; // contador para asignar IDs
  private menu: MenuItem[] = [
    { id: 1, name: 'Pizza', price: 20, category: 'italian' },
    { id: 2, name: 'Hamburguesa', price: 15, category: 'fastfood' },
    { id: 3, name: 'Ensalada', price: 10, category: 'healthy' },
  ];

  // Devuelvo todo el menú
  findAll() {
    return this.menu;
  }

  // Buscar un ítem por id
  findOne(id: number) {
    const item = this.menu.find((m) => m.id === id);
    if (!item) throw new NotFoundException('Menu item not found');
    return item;
  }

  // Crear un nuevo ítem usando DTO
  create(dto: CreateMenuDto) {
    const newItem: MenuItem = { id: ++this.seq, ...dto };
    this.menu.push(newItem);
    return newItem;
  }

  // Actualizar un ítem existente
  update(id: number, dto: UpdateMenuDto) {
    const item = this.findOne(id);
    Object.assign(item, dto); // mezclo lo nuevo con lo viejo
    return item;
  }

  // Eliminar un ítem del menú
  remove(id: number) {
    const index = this.menu.findIndex((m) => m.id === id);
    if (index === -1) throw new NotFoundException('Menu item not found');
    const deleted = this.menu.splice(index, 1);
    return deleted[0];
  }
}
