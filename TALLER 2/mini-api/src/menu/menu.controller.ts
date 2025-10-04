// src/menu/menu.controller.ts
// Este controlador expone las rutas HTTP relacionadas al menú

import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu') // todas las rutas empiezan con /menu
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  // GET /menu
  // implementación de query params (ej: /menu?category=italian&minPrice=15)
  @Get()
  findAll(
    @Query('category') category?: string, // query param: categoría
    @Query('minPrice') minPrice?: string, // query param: precio mínimo
  ) {
    const price = minPrice ? Number(minPrice) : undefined;
    const data = this.menuService.findAll();

    // si recibo filtros por query los aplico
    return data.filter((item) =>
      (category ? item.category === category : true) &&
      (price ? item.price >= price : true)
    );
  }

  // GET /menu/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { // implementación de param
    return this.menuService.findOne(id);
  }

  // POST /menu
  @Post()
  create(@Body() dto: CreateMenuDto) { // implementación de body
    return this.menuService.create(dto);
  }

  // PATCH /menu/:id
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, // implementación de param
    @Body() dto: UpdateMenuDto // implementación de body
  ) {
    return this.menuService.update(id, dto);
  }

  // DELETE /menu/:id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { // implementación de param
    return this.menuService.remove(id);
  }
}
