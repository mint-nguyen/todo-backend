import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 4000;
async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  logger.log(`Application listening on port ${PORT}`);
  logger.log('http://localhost:' + PORT + '/graphql');
  await app.listen(PORT);
}
bootstrap();
