import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthGuard } from './guards/auth/auth.guard';
import { RabbitMqModule } from 'src/transports/rabbitmq.module';

@Module({
  imports: [RabbitMqModule],
  controllers: [AuthController],
  exports: [AuthGuard],
  providers: [AuthGuard],
})
export class AuthModule {}
