import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"


export async function getStock (req: Request, res: Response) {
    let errorCode = 400

    try {
        const products = new ProductDatabase()
        const getAllProducts = await products.getAllProducts()

        const result = []
        for (let i = 0; i < getAllProducts.length; i++) {
            result.push({name: getAllProducts[i].name, qty_stock: getAllProducts[i].qty_stock})
        }

        res.status(200).send(result)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}