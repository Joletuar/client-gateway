import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { NatsModule } from '../transports/nats.module';
import { AuthGuard } from './guards/auth/auth.guard';

@Module({
  imports: [NatsModule],
  controllers: [AuthController],
  exports: [AuthGuard],
  providers: [AuthGuard],
})
export class AuthModule {}
