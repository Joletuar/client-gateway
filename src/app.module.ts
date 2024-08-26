import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { RabbitMqModule } from './transports/rabbitmq.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: {
                  messageKey: 'message',
                  colorize: true,
                },
              }
            : undefined,
        messageKey: 'message',
      },
    }),
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
