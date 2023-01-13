import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"


export async function getAllProducts (req: Request, res: Response) {
    let errorCode = 400

    try {
        const products = new ProductDatabase()
        const result = await products.getAllProducts()
        
        res.status(200).send(result)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}