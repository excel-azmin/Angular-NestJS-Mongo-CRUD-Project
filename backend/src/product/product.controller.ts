import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // create produtct 

  @Post('/')
  async create(@Res() res, @Body() createProductDto: CreateProductDto) {
    const createProduct = await this.productService.creatProduct(createProductDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product Created Successsfully',
      createProduct
    });
  }

  // get all products list

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products)
  }

  // get a single product

  @Get(':id')
  async getProduct(@Res() res, @Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    return res.status(HttpStatus.OK).json(product);
  }

  //update 

  @Put(':id')
  async update(@Res() res,@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
    const updateProduct = await this.productService.updateProduct(id, createProductDto);
    if(! updateProduct) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(updateProduct);
  }

  // delete .. 

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const productDeleted = await this.productService.deleteProduct(id);
    if(! productDeleted) throw new NotFoundException('Product Does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product has been deleted',
      productDeleted
    })
  }
}
