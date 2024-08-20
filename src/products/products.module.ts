import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { RabbitMqModule } from 'src/transports/rabbitmq.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [RabbitMqModule],
})
export class ProductsModule {}
