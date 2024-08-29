import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { PRODUCTS_SERVICE } from 'src/config';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { CreateProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCTS_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async createProduct(@Body() data: CreateProductDto) {
    try {
      const product = await firstValueFrom(
        this.productsClient.send({ cmd: 'create_product' }, data), // esto es un observable
      );

      return product;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAllProducts(@Query() paginationDto: PaginationDto) {
    // send: envia una request y tiene que espera a una response
    // emit: envia una request y no espera una response

    try {
      const products = await firstValueFrom(
        this.productsClient.send({ cmd: 'find_all_products' }, paginationDto),
      );

      return products;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findProduct(@Param('id') id: string) {
    try {
      const product = await firstValueFrom(
        this.productsClient.send({ cmd: 'find_one_product' }, { id }), // esto es un observable
      );

      return product;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    try {
      const product = await firstValueFrom(
        this.productsClient.send({ cmd: 'update_product' }, { id, ...data }), // esto es un observable
      );

      return product;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const product = await firstValueFrom(
        this.productsClient.send({ cmd: 'delete_product' }, { id }), // esto es un observable
      );

      return product;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
