import { NestFactory, Reflector } from '@nestjs/core';
import { SitesModule } from './sites.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { TransformationInterceptor, configSwagger } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(SitesModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new TransformationInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  const configService = app.get(ConfigService);
  configSwagger(app);
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
