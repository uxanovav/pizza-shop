import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const getSwaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle('pizza-shop')
    .setDescription('pizza-shop API documentation')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
};

export const setupSwagger = (app: INestApplication): void => {
  const document = SwaggerModule.createDocument(app, getSwaggerConfig());
  SwaggerModule.setup('swagger', app, document);
};
