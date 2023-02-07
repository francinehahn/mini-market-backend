import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"


export class ProductController {
    constructor (private productBusiness: ProductBusiness) {}

    getAllProducts = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.productBusiness.getAllProducts()
            
            res.status(200).send(result)
    
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }


    getStock = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.productBusiness.getStock()
    
            res.status(200).send(result)
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}