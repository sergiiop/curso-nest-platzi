import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common'

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `product: limit => ${limit}, offset => ${offset} => ${brand}`,
    }
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Filter',
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string) {
    return { message: `product ${id}` }
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear',
      payload,
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    }
  }
}
