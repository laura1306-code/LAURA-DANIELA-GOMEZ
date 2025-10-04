import { Injectable, NotFoundException } from '@nestjs/common';
import { Waiter, WaitersService } from 'src/waiters/waiters.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

// Defino la interfaz Order
export interface Order {
  id: number;
  customer: string;
  date: Date;
  total: number;
  status: string;
  items: string[];  // listado de menús como string
  waiterId: number; // relación por id
  waiter?: Waiter;  // relación opcional al objeto waiter
}

@Injectable()
export class OrdersService {
  private seq = 2;
  private orders: Order[] = [
    {
      id: 1,
      customer: 'Juan Pérez',
      date: new Date('2025-10-01'),
      total: 50,
      status: 'Pendiente',
      items: ['Pizza Margarita', 'Gaseosa'],
      waiterId: 2,
    },
    {
      id: 2,
      customer: 'Ana Gómez',
      date: new Date('2025-10-02'),
      total: 30,
      status: 'Entregado',
      items: ['Hamburguesa', 'Papas Fritas'],
      waiterId: 1,
    },
  ];

  constructor() {}

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new NotFoundException('Order not found');
    return { ...order };
  }

  create(dto: CreateOrderDto) {
    const order: Order = {
      id: ++this.seq,
      date: new Date(),
      ...dto,
    };
    this.orders.push(order);
    return order;
  }

  update(id: number, dto: UpdateOrderDto) {
    const order = this.findOne(id);
    Object.assign(order, dto);
    return order;
  }

  remove(id: number) {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) throw new NotFoundException('Order not found');
    const deleted = this.orders.splice(index, 1);
    return deleted[0];
  }
}
