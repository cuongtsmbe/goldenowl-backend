import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ProductsEntity} from "../../entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly productRepository: Repository<ProductsEntity>,
    ) {}

    async getProduct(id: number): Promise<ProductsEntity | undefined> {
        return this.productRepository.findOneBy({
            id
        });
    }

    async getAllProducts(): Promise<ProductsEntity[]> {
        return this.productRepository.find();
    }


    async updateProduct(id: number, updatedProductData: Partial<ProductsEntity>): Promise<ProductsEntity | undefined> {
        const existingProduct = await this.productRepository.findOneBy({
            id
        });

        if (!existingProduct) {
            throw new HttpException(
                'existingProduct',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

        // Merge the updated data into the existing product
        Object.assign(existingProduct, updatedProductData);

        return this.productRepository.save(existingProduct);
    }

    async deleteProduct(id: number): Promise<boolean> {
        const deleteResult = await this.productRepository.delete(id);
        return deleteResult.affected > 0; // Returns true if a product was deleted
    }

    async createProduct(productData: Partial<ProductsEntity>): Promise<ProductsEntity> {
        const newProduct = this.productRepository.create(productData);
        return this.productRepository.save(newProduct);
    }
}
