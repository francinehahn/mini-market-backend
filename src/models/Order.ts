import { inputProductsOrderDTO } from "./Product"


export class Order {
    constructor (
        readonly id: string,
        readonly fk_client_id: string,
        readonly fk_product_id: number,
        readonly qty: number,
        readonly delivery_date: Date,
        readonly created_at: Date
    ) {
        this.id = id
        this.fk_client_id = fk_client_id
        this.fk_product_id = fk_product_id
        this.qty = qty
        this.delivery_date = delivery_date
        this.created_at = created_at
    }
}

export interface inputCreateOrderDTO {
    clientId: string,
    deliveryDate: Date,
    products: inputProductsOrderDTO[]
}