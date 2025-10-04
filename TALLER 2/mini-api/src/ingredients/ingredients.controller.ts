// src/ingredients/ingredients.controller.ts
// Este controlador expone las rutas HTTP relacionadas a ingredients

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientsDto } from './dto/create-ingredients.dto';
import { UpdateIngredientsDto } from './dto/update-ingredients.dto';

@Controller('ingredients')               // todas las rutas empiezan con ingredients
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}
  
  // GET /menu
  // implementación de query params (ej: /menu?category=italian&minPrice=15)
  @Get()
  findAll(
    @Query('name') name?: string, // query param: name
    @Query('supplier') supplier?: string // query param: supplier 
    ) 
    {
      const data = this.ingredientsService.findAll();
  
      // si recibo filtros por query los aplico
      return data.filter((item) =>
        (name ? item.name === name : true) &&
        (supplier ? item.supplier === supplier : true)
      );
    }

    // GET /ingredients/:id
      @Get(':id')
      findOne(@Param('id', ParseIntPipe) id: number) { // implementación de param
        return this.ingredientsService.findOne(id);
      }
      
      
 // POST /ingredients/:id
     @Post()
       create(@Body() dto: CreateIngredientsDto) { // implementación de body
         return this.ingredientsService.create(dto);
       }

 // PATCH /ingredients/:id
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, // implementación de param
    @Body() dto: UpdateIngredientsDto // implementación de body
  ) {
    return this.ingredientsService.update(id, dto);
  }

  // DELETE /menu/:id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { // implementación de param
    return this.ingredientsService.remove(id);
  }





}

