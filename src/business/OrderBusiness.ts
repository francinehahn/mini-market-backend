import { ClientNotFound, MissingId } from "../errors/ClientErrors"
import { CustomError } from "../errors/CustomError"
import { InvalidDeliveryDate, InvalidQuantity, MissingDeliveryDate, MissingProducts } from "../errors/OrderErrors"
import { ProductNotFound } from "../errors/ProductErrors"
import { inputCreateOrderDTO, Order } from "../models/Order"
import { generateId } from "../services/generateId"
import { ClientRepository } from "./ClientRepository"
import { OrderRepository } from "./OrderRepository"
import { ProductRepository } from "./ProductRepository"


export class OrderBusiness {
    constructor (
        private orderDatabase: OrderRepository,
        private clientDatabase: ClientRepository,
        private productDatabase: ProductRepository
    ) {}

    createOrder = async (input: inputCreateOrderDTO): Promise<void> => {
        try {
            const today = new Date().toISOString().slice(0, 10).replace("-", ",")
            const createdAt = new Date(today)
            const formattedDeliveryDate = new Date(input.deliveryDate.toString().split("/").reverse().join(","))
            
            if (!input.clientId) {
                throw new MissingId()
            }
    
            if (!input.deliveryDate) {
                throw new MissingDeliveryDate()
            }
    
            if (!input.products) {
                throw new MissingProducts()
            }

            if (createdAt.valueOf() > formattedDeliveryDate.valueOf()) {
                throw new InvalidDeliveryDate()
            }
    
            const clientExists = await this.clientDatabase.getClient("id", input.clientId)
            
            if (clientExists.length === 0) {
                throw new ClientNotFound()
            }
    
            const productsList = []

            for (let i = 0; i < input.products.length; i++) {
                const productExists = await this.productDatabase.getProductById(input.products[i].id)
    
                if (productExists.length === 0) {
                    throw new ProductNotFound()
                }
               
                if (Number(input.products[i].qty) > productExists[0].qty_stock) {
                    throw new InvalidQuantity(input.products[i].id, productExists[0].qty_stock)
                }

                productsList.push({...input.products[i], qtyStock: productExists[0].qty_stock})
            }
    
            for (let i = 0; i < productsList.length; i++) {
                const id = generateId()
                const newOrder = new Order(
                    id, input.clientId,
                    productsList[i].id,
                    productsList[i].qty,
                    formattedDeliveryDate,
                    createdAt
                )
                
                await this.orderDatabase.createOrder(newOrder)

                const newStock = productsList[i].qtyStock - input.products[i].qty
                await this.productDatabase.updateStock(productsList[i].id, newStock)
            }
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }   
}