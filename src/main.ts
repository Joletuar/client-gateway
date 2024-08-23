import { NestFactory } from '@nestjs/core';
import { Logger, RequestMethod, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { envs } from './config';
import { RpcCustomExceptionFilter } from './common/exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [
      {
        path: '/',
        method: RequestMethod.GET,
      },
    ],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000', //! TODO: cambiar esto a variable de entorno
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  });

  await app.listen(envs.PORT);

  const logger = new Logger('Client-Gateway');

  logger.log(`App running on port ${envs.PORT}`);
}

bootstrap();
