import { OrderRepository } from "../business/OrderRepository"
import { CustomError } from "../errors/CustomError"
import { Order } from "../models/Order"
import BaseDatabase from "./BaseDatabase"


export class OrderDatabase extends BaseDatabase implements OrderRepository {
    TABLE_NAME = "MiniMarket_Orders"

    createOrder = async (newOrder: Order): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(newOrder)    

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}