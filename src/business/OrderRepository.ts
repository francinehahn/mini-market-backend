import { Order } from "../models/Order"


export interface OrderRepository {
    createOrder (newOrder: Order): Promise<void>
}