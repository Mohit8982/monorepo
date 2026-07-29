import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from "./products/products.module";
import { OrdersModule } from "./orders/orders.module";
import { CartModule } from "./cart/cart.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: ["http://localhost:4300"],
    credentials: true,
  });

  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("API v2")
    .setDescription("API v2 (NestJS) - Auth & Products")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  try {
    const document = SwaggerModule.createDocument(app, config, {
      include: [AuthModule, ProductsModule, OrdersModule, CartModule],
    });
    SwaggerModule.setup("docs", app, document);
  } catch (err: any) {
    console.warn("Swagger setup skipped:", err?.message ?? err);
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`✅ Server running on http://localhost:${port}/api`);
  console.log(`📚 Swagger docs available at http://localhost:${port}/docs`);
}

bootstrap();
