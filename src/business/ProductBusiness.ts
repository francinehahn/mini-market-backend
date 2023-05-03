import { CustomError } from "../errors/CustomError"
import { NoProductsRegistered } from "../errors/ProductErrors"
import { Product, returnProductStockDTO } from "../models/Product"
import { ProductRepository } from "./ProductRepository"


export class ProductBusiness {
    constructor (private productDatabase: ProductRepository) {}

    getAllProducts = async (): Promise<Product[]> => {
        try {
            const result = await this.productDatabase.getAllProducts()

            if (result.length === 0) {
                throw new NoProductsRegistered()
            }

            return result

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getStock  = async (): Promise<returnProductStockDTO[]> => {
        try {
            const result = await this.productDatabase.getStock()

            if (result.length === 0) {
                throw new NoProductsRegistered()
            }
            
            return result
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}