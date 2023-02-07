import { inputProductsOrderDTO } from "./Product"


export class Order {
    constructor (
        private id: string,
        private fk_client_id: string,
        private fk_product_id: number,
        private qty: number,
        private delivery_date: Date,
        private created_at: Date
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