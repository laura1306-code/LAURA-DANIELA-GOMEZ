import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';

export interface Waiter {
  id: number;
  name: string;
  shift: string;
  yearsExperience: number;
}

@Injectable()
export class WaitersService {
  private seq = 3;
  private waiters: Waiter[] = [
    { id: 1, name: 'Carlos López', shift: 'Mañana', yearsExperience: 2 },
    { id: 2, name: 'María Fernández', shift: 'Tarde', yearsExperience: 5 },
    { id: 3, name: 'Andrés Gómez', shift: 'Noche', yearsExperience: 3 },
  ];

  findAll(): Waiter[] {
    return this.waiters;
  }

  findOne(id: number) {
    const item = this.waiters.find((w) => w.id === id);
    if (!item) throw new NotFoundException('Waiter not found');
    return item;
  }

  create(dto: CreateWaiterDto) {
    const waiter: Waiter = { id: ++this.seq, ...dto };
    this.waiters.push(waiter);
    return waiter;
  }

  update(id: number, dto: UpdateWaiterDto) {
    const item = this.findOne(id);
    Object.assign(item, dto);
    return item;
  }

  remove(id: number) {
    const index = this.waiters.findIndex((w) => w.id === id);
    if (index === -1) throw new NotFoundException('Waiter not found');
    const deleted = this.waiters.splice(index, 1);
    return deleted[0];
  }
}
