import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { OrdersModule } from './orders/orders.module';
import { WaitersModule } from './waiters/waiters.module';

@Module({
  imports: [MenuModule, IngredientsModule, OrdersModule, WaitersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
