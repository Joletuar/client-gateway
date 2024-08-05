import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';

import { NATS_SERVICE } from '../config';
import { LogingUserDto } from './dtos/login.user.dto';
import { RegisterUserDto } from './dtos/register.user.dto';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('login-user')
  logginUser(@Body() logingUserDto: LogingUserDto) {
    return this.client.send('auth.login.user', logingUserDto);
  }

  @Post('register-user')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    try {
      const user = await firstValueFrom(
        this.client.send('auth.register.user', registerUserDto),
      );
      return user;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Post('verify-token')
  verifyToken() {
    return this.client.send('auth.verify.token', {});
  }
}
