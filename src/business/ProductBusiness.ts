import { ProductDatabase } from "../data/ProductDatabase"
import { CustomError } from "../errors/CustomError"
import { Product, returnProductStockDTO } from "../models/Product"
import { ProductRepository } from "./ProductRepository"


export class ProductBusiness {
    constructor (private productDatabase: ProductRepository) {}

    getAllProducts = async (): Promise<Product[]> => {
        try {
            const productDatabase = new ProductDatabase()
            const result = await this.productDatabase.getAllProducts()
            return result

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getStock  = async (): Promise<returnProductStockDTO[]> => {
        try {
            const productDatabase = new ProductDatabase()
            const result = await this.productDatabase.getStock()

            return result
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}