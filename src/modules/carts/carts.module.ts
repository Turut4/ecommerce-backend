import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { Cart } from 'src/shared/entities/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/shared/entities/product.entity';
import { ProductsService } from '../products/products.service';
import { ProductsModule } from '../products/products.module';
import { SkuService } from '../products/sku/sku.service';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, Product]),
    ProductsModule,
    CategoriesModule,
  ],
  providers: [CartsService, ProductsService, SkuService],
  controllers: [CartsController],
  exports: [CartsService],
})
export class CartsModule {}
