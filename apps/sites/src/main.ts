import { NestFactory } from '@nestjs/core';
import { SitesModule } from './sites.module';

async function bootstrap() {
  const app = await NestFactory.create(SitesModule);
  await app.listen(3000);
}
bootstrap();
