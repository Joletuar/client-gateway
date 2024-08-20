import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { RabbitMqModule } from 'src/transports/rabbitmq.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [OrdersController],
  imports: [RabbitMqModule, AuthModule],
})
export class OrdersModule {}
