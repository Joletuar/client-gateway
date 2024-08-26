import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { RabbitMqModule } from 'src/transports/rabbitmq.module';

@Module({
  imports: [RabbitMqModule],
  controllers: [AuthController],
})
export class AuthModule {}
