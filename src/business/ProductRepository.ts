import { Product, returnProductStockDTO } from "../models/Product"


export interface ProductRepository {
    getAllProducts (): Promise<Product[]>
    getStock (): Promise<returnProductStockDTO[]>
    getProductById (id: number): Promise<any>
    updateStock (id: number, newStock: number): Promise<any>
}