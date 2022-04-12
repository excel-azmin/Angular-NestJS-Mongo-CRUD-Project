import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import {Model} from 'mongoose'

@Injectable()
export class ProductService {

  constructor(@InjectModel('Product') private readonly productModel : Model<Product>){}

  // get all products 

  async getProducts(): Promise<Product[]>{
    const products = await this.productModel.find();
    return products;
  }

  // get a single product 

  async getProduct(id : string ): Promise<Product>{
    const product = await this.productModel.findById(id);
    return product;
  }

  // create product

  async creatProduct(creatProductDto : CreateProductDto) : Promise<Product>{
    const newProduct = await this.productModel.create(creatProductDto);
    return newProduct.save();
  }

  // update product 

  async updateProduct(id: string, creatProductDto : CreateProductDto) : Promise<Product>{
    const updateProduct = await this.productModel.findByIdAndUpdate(id, creatProductDto, {new: true});
    return updateProduct;
  }

  // delete product 

  async deleteProduct(id: string): Promise<any>{
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    return deletedProduct;
  }


}
