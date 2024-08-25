import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';

import { catchError, firstValueFrom } from 'rxjs';

import { AUTH_SERVICE } from '../config';
import { LogingUserDto } from './dtos/login.user.dto';
import { RegisterUserDto } from './dtos/register.user.dto';
import { User } from './decorator/user.decorator';
import { Token } from './decorator/token.decorator';
import { CurrentUser } from './interfaces/current-user.interface';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}

  @Post('login-user')
  logginUser(@Body() logingUserDto: LogingUserDto) {
    return this.authClient.send('auth.login.user', logingUserDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Post('register-user')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    // this.client.send('auth.register.user', registerUserDto).pipe(
    //   catchError((error) => {
    //     throw new RpcException(error);
    //   }),
    // );

    try {
      const user = await firstValueFrom(
        this.authClient.send('auth.register.user', registerUserDto),
      );
      return user;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post('verify-token')
  verifyToken(@User() user: CurrentUser, @Token() token: string) {
    return { user, token };
  }
}
