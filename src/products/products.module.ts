import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { RabbitMqModule } from 'src/transports/rabbitmq.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProductsController],
  imports: [RabbitMqModule, AuthModule],
})
export class ProductsModule {}
