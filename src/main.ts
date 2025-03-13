import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Registro del filtro global para manejo de excepciones
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
  console.log('Servidor iniciado en http://localhost:3000');
}
bootstrap();
