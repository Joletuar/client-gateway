import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getHealthCheckStatus() {
    return 'Client Gateway is runnign OK';
  }
}
