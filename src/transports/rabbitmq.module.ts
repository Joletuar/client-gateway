import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  envs,
  PRODUCTS_SERVICE,
  ORDERS_SERVICE,
  AUTH_SERVICE,
} from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCTS_SERVICE,
        transport: Transport.RMQ,
        options: {
          queue: 'products',
          urls: [envs.RABBITMQ_SERVER],
          noAck: true,
          queueOptions: {
            durable: true,
            autoDelete: false,
          },
        },
      },
      {
        name: ORDERS_SERVICE,
        transport: Transport.RMQ,
        options: {
          queue: 'orders',
          urls: [envs.RABBITMQ_SERVER],
          noAck: true,
          queueOptions: {
            durable: true,
            autoDelete: false,
          },
        },
      },
      {
        name: AUTH_SERVICE,
        transport: Transport.RMQ,
        options: {
          queue: 'auth',
          urls: [envs.RABBITMQ_SERVER],
          noAck: true,
          queueOptions: {
            durable: true,
            autoDelete: false,
          },
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: PRODUCTS_SERVICE,
        transport: Transport.RMQ,
        options: {
          queue: 'products',
          urls: [envs.RABBITMQ_SERVER],
          noAck: true,
          queueOptions: {
            durable: true,
            autoDelete: false,
          },
        },
      },
      {
        name: ORDERS_SERVICE,
        transport: Transport.RMQ,
        options: {
          queue: 'orders',
          urls: [envs.RABBITMQ_SERVER],
          noAck: true,
          queueOptions: {
            durable: true,
            autoDelete: false,
          },
        },
      },
      {
        name: AUTH_SERVICE,
        transport: Transport.RMQ,
        options: {
          queue: 'auth',
          urls: [envs.RABBITMQ_SERVER],
          noAck: true,
          queueOptions: {
            durable: true,
            autoDelete: false,
          },
        },
      },
    ]),
  ],
})
export class RabbitMqModule {}
