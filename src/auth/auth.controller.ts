import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { NATS_SERVICE } from '../config';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register-user')
  registerUser() {
    return this.client.send('auth.register.user', {});
  }

  @Post('login-user')
  logginUser() {
    return this.client.send('auth.login.user', {});
  }

  @Post('verify-token')
  verifyToken() {
    return this.client.send('auth.verify.token', {});
  }
}
