import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';

@Controller('waiters')
export class WaitersController {
  constructor(private readonly waitersService: WaitersService) {}

  // GET /waiters?shift=Noche
  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('shift') shift?: string,
  ) {
    const data = this.waitersService.findAll();
    return data.filter((item) =>
      (name ? item.name === name : true) &&
      (shift ? item.shift === shift : true)
    );
  }

  // GET /waiters/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.waitersService.findOne(id);
  }

  // POST /waiters
  @Post()
  create(@Body() dto: CreateWaiterDto) {
    return this.waitersService.create(dto);
  }

  // PATCH /waiters/:id
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWaiterDto,
  ) {
    return this.waitersService.update(id, dto);
  }

  // DELETE /waiters/:id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.waitersService.remove(id);
  }
}
