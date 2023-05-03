import { ProductRepository } from "../business/ProductRepository"
import { CustomError } from "../errors/CustomError"
import { Product, returnProductStockDTO } from "../models/Product"
import BaseDatabase from "./BaseDatabase"


export class ProductDatabase extends BaseDatabase implements ProductRepository {
    TABLE_NAME = "MiniMarket_Products"

    getAllProducts = async (): Promise<Product[] | []> => {
        try {
            return await BaseDatabase.connection(this.TABLE_NAME).select()
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getStock  = async (): Promise<returnProductStockDTO[]> => {
        try {
            return await BaseDatabase.connection(this.TABLE_NAME).select("name", "qty_stock")
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getProductById = async (id: number): Promise<Product | undefined> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME).select().where({id})
            return  result[0]
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    updateStock = async (id: number, newStock: number): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).update("qty_stock", newStock).where({id})
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}