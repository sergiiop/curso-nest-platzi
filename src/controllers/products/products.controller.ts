import { Controller, Get, Query, Param, Post } from '@nestjs/common'

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return `product: limit => ${limit}, offset => ${offset} => ${brand}`
  }

  @Get('filter')
  getProductFilter() {
    return `Filter`
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`
  }

  @Post()
  create() {
    return {
      message: 'Accion para crear',
    }
  }
}
