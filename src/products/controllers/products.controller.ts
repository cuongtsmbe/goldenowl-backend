import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProductsService} from "../providers";

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}

    @Post()
    async createProduct(@Body() productData: any) {
        const createdProduct = await this.productService.createProduct(productData);
        return createdProduct;
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
        const deletedProduct = await this.productService.deleteProduct(id);
        return deletedProduct;
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() updatedProductData: any) {
        const updatedProduct = await this.productService.updateProduct(id, updatedProductData);
        return updatedProduct;
    }

    @Get(':id')
    async getProduct(@Param('id') id: number) {
        const product = await this.productService.getProduct(id);
        return product;
    }

    @Get()
    async getAllProducts() {
        const products = await this.productService.getAllProducts();
        return products;
    }

}
