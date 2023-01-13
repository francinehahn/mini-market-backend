import { Request, Response } from "express"
import { ClientDatabase } from "../database/ClientDatabase"
import { Order } from "../database/Order"
import { OrderDatabase } from "../database/OrderDatabase"
import { ProductDatabase } from "../database/ProductDatabase"
import { Product } from "../types"


export async function createOrder (req: Request, res: Response) {
    let errorCode = 400

    try {
        const fk_client_id = req.body.fk_client_id
        const delivery_date = req.body.delivery_date
        let products: Product[] = req.body.products
        const created_at = new Date().toISOString().slice(0, 10)
        
        if (!fk_client_id) {
            errorCode = 422
            throw new Error("Provide the client id.")
        }

        if (!delivery_date) {
            errorCode = 422
            throw new Error("Provide the delivery date.")
        }

        if (!products) {
            errorCode = 422
            throw new Error("Provide a list of products with the following information: {fk_product_id, qty}.")
        }

        const client = new ClientDatabase()
        const clientExists = await client.getClientById(fk_client_id)
        
        if (clientExists.length === 0) {
            errorCode = 422
            throw new Error("Client not found.")
        }

        const product = new ProductDatabase()
        for (let i = 0; i < products.length; i++) {
            const productExists = await product.getProductById(products[i].id)

            if (productExists.length === 0) {
                errorCode = 422
                throw new Error("Product not found.")
            }

            products[i] = {...products[i], qty_stock: productExists[0].qty_stock}
            if (products[i].qty_stock < products[i].qty) {
                errorCode = 422
                throw new Error(`The quantity of the product id ${products[i].id} exceeds the quantity in stock, which is ${products[i].qty_stock}.`)
            }
        }

        const orderDB = new OrderDatabase()

        for (let i = 0; i < products.length; i++) {
            const newOrder = new Order(fk_client_id, products[i].id, products[i].qty, delivery_date, created_at)
            
            await orderDB.insertOrder(newOrder)
            const newStock = products[i].qty_stock - products[i].qty
            await product.updateStock(products[i].id, newStock)
        }

        res.status(201).send("Success! The order has been registered.")

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}