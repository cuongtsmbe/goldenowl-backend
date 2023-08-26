import { Module } from '@nestjs/common';
import * as controllers from './controllers';
import * as providers from './providers';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductsEntity} from "../entity";
@Module({
    imports: [TypeOrmModule.forFeature([ProductsEntity])],
    providers: Object.values(providers),
    controllers: Object.values(controllers),
    exports: Object.values(providers),
})
export class ProductsModule {}
