import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { NATS_SERVICE } from '../config';
import { LogingUserDto } from './dtos/login.user.dto';
import { RegisterUserDto } from './dtos/register.user.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('login-user')
  logginUser(@Body() logingUserDto: LogingUserDto) {
    return this.client.send('auth.login.user', logingUserDto);
  }

  @Post('register-user')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto);
  }

  @Post('verify-token')
  verifyToken() {
    return this.client.send('auth.verify.token', {});
  }
}
