import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { RabbitMqModule } from './transports/rabbitmq.module';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    RabbitMqModule,
    AuthModule,
    HealthCheckModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
