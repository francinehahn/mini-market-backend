import { Request, Response } from "express"
import { OrderBusiness } from "../business/OrderBusiness"
import { inputCreateOrderDTO } from "../models/Order"


export class OrderController {
    constructor (private orderBusiness: OrderBusiness) {}

    createOrder = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: inputCreateOrderDTO = {
                clientId: req.body.clientId,
                deliveryDate: req.body.deliveryDate,
                products: req.body.products
            }
         
            await this.orderBusiness.createOrder(input)
    
            res.status(201).send("Success! The order has been registered.")
    
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}